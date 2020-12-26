from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase

from authentication.serializers import SignupSerializer


User = get_user_model()


class TestSignupSerializer(APITestCase):
    def setUp(self):
        self.user_data = {"first_name": "test", "email": "test@email.com", "password": "valid@a1b2c3iq"}

        self.RequiredError = "This field is required."

    def test_serializer_is_true_if_valid_data(self):
        """
        Test that serializer.is_valid() returns True for valid user data
        :return:
        """
        serializer = SignupSerializer(data=self.user_data)
        self.assertTrue(serializer.is_valid())

    def test_serializer_is_false_if_no_first_name_in_user_data(self):
        """
        Test that serializer.is_valid() returns False if no first_name key in
        user request json data
        :return:
        """
        data = self.user_data
        del data["first_name"]
        serializer = SignupSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["first_name"][0], self.RequiredError)

    def test_serializer_is_false_if_no_email_in_user_data(self):
        """
        Test that serializer.is_valid() returns False if no email key in user
        request json data
        :return:
        """
        data = self.user_data
        del data["email"]
        serializer = SignupSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], self.RequiredError)

    def test_serializer_is_false_if_no_password_in_user_data(self):
        """
        Test that serializer.is_valid() returns False if no password key in user
        request json data
        :return:
        """
        data = self.user_data
        del data["password"]
        serializer = SignupSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["password"][0], self.RequiredError)

    def test_serializer_creates_new_user_if_valid_user_data(self):
        """
        Tests that serializer.save() creates a new User instance in the db if
        user request json is valid
        :return:
        """
        serializer = SignupSerializer(data=self.user_data)
        serializer.is_valid()
        user = serializer.save()
        self.assertEqual(user, User.objects.all()[0])

    def test_serializer_does_not_create_new_user_if_invalid_user_data(self):
        """
        Tests that serializer.save() does not create a new User instance in the db
        if user request json is invalid
        :return:
        """
        data = self.user_data
        del data["first_name"]
        serializer = SignupSerializer(data=data)
        self.assertFalse(serializer.is_valid())
        with self.assertRaises(AssertionError):
            serializer.save()
