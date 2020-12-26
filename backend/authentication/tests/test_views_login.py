from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.test import APITestCase, APIClient

from authentication import error_messages

User = get_user_model()


class TestLogin(APITestCase):
    def setUp(self):
        # Create some User here
        User.objects.create_user(username="test@email.com", password="pTest@a12b")

        # User Login data
        self.user_data = {"email": "test@email.com", "password": "pTest@a12b"}

        self.client = APIClient()

    def test_login_sets_auth_token_cookie_and_returns_200_if_valid_credentials_and_valid_data_format(self):
        """
        Tests that user login with valid credentials and input data format sets httpOnly
        header and returns 200
        :return:
        """
        response = self.client.post(reverse("authentication:login"), self.user_data, format="json")
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()["success"])

        auth_token = response.cookies["Authorization"].value
        self.assertTrue(auth_token.startswith("Bearer "))

    def test_login_does_not_set_cookie_and_returns_401_if_invalid_credentials(self):
        """
        Test that user login with invalid credentials and does not set any
        auth token cookie and returns 401
        :return:
        """
        data = self.user_data
        data["email"] = "invalid@email.com"
        response = self.client.post(reverse("authentication:login"), data)
        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()["success"])
        self.assertEqual(response.json()["error"], error_messages.INVALID_LOGIN_CREDENTIALS)

    def test_successful_login_sets_cookie_that_can_be_used_for_authentication(self):
        """
        Tests that successful user login sets a cookie Authorization key token value
        that can be used by the user to authenticate when the user makes a request
        :return:
        """
        response = self.client.post(reverse("authentication:login"), self.user_data, format="json")
        self.assertEqual(response.status_code, 200)

        auth_token = response.cookies["Authorization"].value
        self.client.credentials(HTTP_AUTHORIZATION=auth_token)

        response = self.client.get(reverse("authentication:verify_login"))
        self.assertTrue(response.json()["success"])

    def test_login_returns_403_for_invalid_login_request_data_format(self):
        """
        Tests that incorrect request body format errors and returns 403
        :return:
        """

        # Test for no email
        data = self.user_data
        del data["email"]
        response = self.client.post(reverse("authentication:login"), data)
        self.assertEqual(response.status_code, 403)
        self.assertEqual(response.json()["email"][0], error_messages.FIELD_REQUIRED)

        # Test for no password
        data = self.user_data
        del data["password"]
        response = self.client.post(reverse("authentication:login"), data)
        self.assertEqual(response.status_code, 403)
        self.assertEqual(response.json()["password"][0], error_messages.FIELD_REQUIRED)

    def test_unauthenticated_user_is_rejected_with_error_message_and_403(self):
        """
        Tests that when a user tries to access a protected route endpoint without
        being authenticated, it fails
        :return:
        """
        response = self.client.get(reverse("authentication:verify_login"), self.user_data, format="json")
        self.assertEqual(response.status_code, 403)
        self.assertEqual(response.json()["detail"], error_messages.AUTH_CREDENTIALS_NOT_FOUND)
