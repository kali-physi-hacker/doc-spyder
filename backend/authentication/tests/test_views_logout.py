from django.contrib.auth import get_user_model
from django.urls import reverse

from rest_framework.test import APITestCase, APIClient

User = get_user_model()


class TestLogout(APITestCase):
    def setUp(self):
        self.password = "test@a1b2c3iq"
        self.user = User.objects.create_user(username="test@email.com", password=self.password)

        self.client = APIClient()

    def test_logout_deletes_authorization_cookie_value(self):
        """
        Tests that logout deletes authorization cookie value
        :return:
        """
        response = self.client.post(
            reverse("authentication:login"), {"email": self.user.username, "password": self.password}
        )
        self.assertEqual(response.status_code, 200)

        response = self.client.get(reverse("authentication:logout"))
        self.assertEqual(response.cookies["Authorization"].value, "")
