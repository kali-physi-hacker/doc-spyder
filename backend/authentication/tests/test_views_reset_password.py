from django.urls import reverse
from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase, APIClient

from authentication.error_messages import EMAIL_DOES_NOT_EXIST, INVALID_EMAIL, INVALID_TOKEN_LINK
from authentication.success_messages import PASSWORD_CHANGED_SUCCESS

User = get_user_model()


class TestResetPasswordEmailCheck(APITestCase):
    def setUp(self):
        User.objects.create_user(username="test@email.com", email="test@email.com", password="test@password.secure")
        self.user_data = {"email": "test@email.com"}

        self.client = APIClient()

    def test_check_password_reset_email_returns_200_and_sends_email_if_email_exist(self):
        """
        Tests that password reset email check returns 200 and sends password reset link
        if email exists
        :return:
        """
        response = self.client.post(reverse("authentication:reset_password_email_check"), self.user_data)
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()["success"])

    def test_check_password_reset_email_returns_403_if_invalid_email_format(self):
        """
        Tests that password reset email check returns 403 if email format is invalid
        :return:
        """
        self.user_data["email"] = "invalid_email"
        response = self.client.post(reverse("authentication:reset_password_email_check"), self.user_data)
        self.assertEqual(response.status_code, 403)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"]["email"][0], INVALID_EMAIL)

    def test_check_password_reset_email_returns_403_if_email_does_exist(self):
        """
        Tests that password reset email check returns 403 if email does not exist
        :return:
        """
        self.user_data["email"] = "test@doesnotexist.com"
        response = self.client.post(reverse("authentication:reset_password_email_check"), self.user_data)
        self.assertEqual(response.status_code, 403)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"]["email"][0], EMAIL_DOES_NOT_EXIST)


class TestResetPasswordLinkCheck(APITestCase):
    def setUp(self):
        User.objects.create_user(username="test@email.com", email="test@email.com", password="test@password.secure")
        self.user_data = {"email": "test@email.com"}

        self.client = APIClient()

    def test_check_password_link_returns_200_if_links_not_invalidated(self):
        """
        Tests that password link returns 200 and success if user has not used
        link
        :return:
        """
        response = self.client.post(reverse("authentication:reset_password_email_check"), self.user_data)
        password_reset_link = response.json()["password_reset_link"][11:]
        response = self.client.get(password_reset_link)
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()["success"])

    def test_check_password_link_returns_401_if_links_has_already_been_used(self):
        """
        Tests that password link returns 401 if password reset has already been used
        :return:
        """
        response = self.client.post(reverse("authentication:reset_password_email_check"), self.user_data)
        password_reset_link = response.json()["password_reset_link"][11:]
        self.client.get(password_reset_link)
        response = self.client.get(password_reset_link)
        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"], INVALID_TOKEN_LINK)


class ResetPasswordChange(APITestCase):
    def setUp(self):
        User.objects.create_user(username="test@email.com", email="test@email.com", password="test@password.secure")
        self.user_data = {"email": "test@email.com"}

        self.client = APIClient()

    def test_reset_password_change_returns_201_and_changes_password(self):
        """
        Test that password change changes user password after token link
        redirection and returns 201
        :return:
        """
        password_reset_link = self.client.post(
            reverse("authentication:reset_password_email_check"), self.user_data
        ).json()["password_reset_link"][11:]
        token = self.client.get(password_reset_link).json()["token"]
        new_password = "test@a1b2c3iq"
        response = self.client.post(
            reverse("authentication:reset_password_change", args=(token,)), {"password": new_password}
        )
        self.assertTrue(response.json()["success"])
        self.assertEqual(response.status_code, 201)
        self.assertEqual(response.json()["message"], PASSWORD_CHANGED_SUCCESS)
        self.assertTrue(User.objects.get(email=self.user_data["email"]).check_password(new_password))

    def test_reset_password_change_returns_403_if_invalid_token(self):
        new_password = "test@a1b2c3iq"
        response = self.client.post(
            reverse("authentication:reset_password_change", args=("invalidtoken",)), {"password": new_password}
        )
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.status_code, 403)
        self.assertEqual(response.json()["error"], INVALID_TOKEN_LINK)
        self.assertFalse(User.objects.get(email=self.user_data["email"]).check_password(new_password))
