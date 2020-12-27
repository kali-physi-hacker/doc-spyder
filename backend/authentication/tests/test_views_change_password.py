from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.test import APITestCase, APIClient

from authentication.error_messages import INSECURE_PASSWORD, INVALID_OLD_PASSWORD

User = get_user_model()


class TestChangePassword(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="test@email.com", password="test")
        self.client = APIClient()

    def test_change_password_success_if_valid_old_password_and_new_password_is_strong(self):
        """
        Tests that change password is successful if old password is valid and new password
        is strong
        :return:
        """
        self.client.force_authenticate(self.user)
        response = self.client.post(reverse("authentication:change_password"), {
            "old_password": "test",
            "new_password": "test@strong.123"
        })
        self.assertEqual(response.status_code, 201)
        self.assertTrue(response.json()["success"])
        self.assertEqual(response.json()["message"], "Password Changed Successfully")

        # Check that password is really changed
        self.assertTrue(self.user.check_password("test@strong.123"))

    def test_change_password_returns_401_if_valid_old_password_and_new_password_is_not_strong(self):
        """
        Tests that change password is unsuccessful if old password is valid and new password
        is not strong
        :return:
        """
        self.client.force_authenticate(self.user)
        response = self.client.post(reverse("authentication:change_password"), {
            "old_password": "test",
            "new_password": "abc"
        })
        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["errors"]["new_password"][0], INSECURE_PASSWORD)

        # Check that password is really changed
        self.assertFalse(self.user.check_password("abc"))

    def test_change_password_returns_401_if_invalid_old_password_and_secure_new_password(self):
        """
        Tests that change password is unsuccessful if old password is incorrect and new password validation
        passes
        :return:
        """
        self.client.force_authenticate(self.user)
        response = self.client.post(reverse("authentication:change_password"), {
            "old_password": "incorrect",
            "new_password": "test@123.secure"
        })
        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"], INVALID_OLD_PASSWORD)
