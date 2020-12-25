from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.test import APITestCase, APIClient

User = get_user_model()


class TestLogin(APITestCase):
    def setUp(self):
        # Create some User here
        User.objects.create_user(
            username="test@email.com",
            password="pTest@a12b"
        )

        # User Login data
        self.user_data = {
            "email": "test@email.com",
            "password": "pTest@a12b"
        }

        self.client = APIClient()

    def test_login_sets_and_returns_200_if_valid_credentials_and_valid_data_format(self):
        """
        Tests that user login with valid credentials and input data format sets httpOnly
        header and returns 200
        :return:
        """
        response = self.client.post(reverse("authentication:login"), (self.user_data,))
        self.assertEqual(response.status_code, 200)
        self.assertEqual("Authorization", response._headers)
        self.assertIn("message", response.json().keys())
        self.assertIn("email", response.json().keys())

        auth_token = response.cookies["Authorization"].value
        self.assertTrue(auth_token.startswith("Bearer "))
