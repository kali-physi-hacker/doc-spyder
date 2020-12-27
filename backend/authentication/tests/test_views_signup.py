from django.urls import reverse
from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase, APIClient

from authentication import error_messages

User = get_user_model()


class TestSignup(APITestCase):
    def setUp(self):
        self.client = APIClient()
        self.user_data = {
            "first_name": "Test FN",
            "email": "test@email.com",
            "password": "test@a1b2c3iq"
        }

    def test_signup_creates_user_and_returns_201_if_valid_user_input_data(self):
        """
        Tests that signup creates a new User and returns 201 if user request
        body is valid
        :return:
        """
        response = self.client.post(reverse("authentication:signup"), self.user_data)
        self.assertEqual(response.status_code, 201)
        self.assertTrue(response.json()["success"])

        # Test User is Created
        user = User.objects.filter(email=self.user_data["email"]).first()
        self.assertIsNotNone(user)

        # Test that user is inactive
        self.assertFalse(user.is_active)

    def test_signup_returns_403_if_password_does_not_meet_validation_requirement(self):
        """
        Tests that signup returns 403 if password is not strong
        :return:
        """
        self.user_data["password"] = "abc"
        response = self.client.post(reverse("authentication:signup"), self.user_data)
        self.assertEqual(response.status_code, 403)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["errors"]["password"][0], error_messages.INSECURE_PASSWORD)

    def test_signup_does_not_create_user_and_returns_403_if_invalid_user_input_data(self):
        """
        Tests that signup does not create a new User and returns 403 if user
        request body is invalid
        :return:
        """

        # Test for no first name
        data = self.user_data.copy()
        del data["first_name"]
        response = self.client.post(reverse("authentication:signup"), data)
        self.assertEqual(response.status_code, 403)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["errors"]['first_name'][0], error_messages.FIELD_REQUIRED)
        self.assertIsNone(User.objects.filter(email=self.user_data["email"]).first())

        # Test for no email
        data = self.user_data.copy()
        del data["email"]
        response = self.client.post(reverse("authentication:signup"), data)
        self.assertEqual(response.status_code, 403)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["errors"]['email'][0], error_messages.FIELD_REQUIRED)
        self.assertIsNone(User.objects.filter(email=self.user_data["email"]).first())

        # Test for no email
        data = self.user_data.copy()
        del data["password"]
        response = self.client.post(reverse("authentication:signup"), data)
        self.assertEqual(response.status_code, 403)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["errors"]['password'][0], error_messages.FIELD_REQUIRED)
        self.assertIsNone(User.objects.filter(email=self.user_data["email"]).first())

    def test_signup_returns_403_if_user_email_already_exist(self):
        """
        Tests that signup returns 403 if user with that email already exist
        :return:
        """
        self.client.post(reverse("authentication:signup"), self.user_data)
        response = self.client.post(reverse("authentication:signup"), self.user_data)
        self.assertEqual(response.status_code, 403)
        self.assertEqual(response.json()["errors"]["email"][0], error_messages.EMAIL_ALREADY_EXIST)

    def test_signup_activation_activates_user_and_returns_200_if_link_1st_time_and_not_expired(self):
        """
        Tests that account activation activates user account and returns 200 if link's 1st time
        and not expired
        :return:
        """
        response = self.client.post(reverse("authentication:signup"), self.user_data)
        activation_link = response.json()["activation_link"]
        response = self.client.get(activation_link[11:])
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()["success"])
        self.assertEqual(response.json()["message"], "Account Activated Successfully")

        # Verify that user is really active
        user = User.objects.get(email=self.user_data["email"])
        self.assertTrue(user.is_active)

    def test_signup_activation_returns_403_if_link_is_used(self):
        """
        Tests that account activation returns 403 if link is invalidated (used)
        :return:
        """
        response = self.client.post(reverse("authentication:signup"), self.user_data)
        activation_link = response.json()["activation_link"]
        self.client.get(activation_link[11:])
        response = self.client.get(activation_link[11:])
        self.assertEqual(response.status_code, 403)
        self.assertEqual(response.json()["error"], error_messages.INVALID_TOKEN_LINK)