from django.contrib.auth import get_user_model

from rest_framework.test import APITestCase

from authentication.serializers import (
    SignupSerializer,
    ChangePasswordSerializer,
    ResetPasswordCheckSerializer,
    ResetPasswordChangeSerializer,
)
from authentication.error_messages import EMAIL_ALREADY_EXIST, INSECURE_PASSWORD, EMAIL_DOES_NOT_EXIST, INVALID_EMAIL


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

    def test_serializer_returns_false_if_password_does_not_meet_validation_requirement(self):
        """
        Tests that serializer.is_valid() returns False if password is not strong
        :return:
        """
        self.user_data["password"] = "abc"
        serializer = SignupSerializer(data=self.user_data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["password"][0], INSECURE_PASSWORD)

    def test_serializer_is_valid_returns_false_if_email_already_exists(self):
        """
        Tests that serializer.is_valid() returns False if user email already
        exist
        :return:
        """
        self.user_data["username"] = self.user_data["email"]
        User.objects.create_user(**self.user_data)
        serializer = SignupSerializer(data=self.user_data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], EMAIL_ALREADY_EXIST)


class TestChangePasswordSerializer(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="test@email.com", password="test")
        self.user_data = {"old_password": "test", "new_password": "test@123.secure"}

    def test_serializer_is_true_if_valid_user_input_data(self):
        """
        Tests that serializer returns true if user request body is valid
        :return:
        """
        serializer = ChangePasswordSerializer(data=self.user_data)
        self.assertTrue(serializer.is_valid())

    def test_serializer_is_false_if_new_password_does_not_meet_password_validation_requirements(self):
        """
        Tests that serializer returns false if user new password is not secure (strong)
        :return:
        """
        self.user_data["new_password"] = "abc"
        serializer = ChangePasswordSerializer(data=self.user_data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["new_password"][0], INSECURE_PASSWORD)


class TestResetPasswordEmailCheck(APITestCase):
    def setUp(self):
        User.objects.create_user(username="test@email.com", email="test@email.com", password="testpassword@forgot")
        self.user_data = {"email": "test@email.com"}

    def test_serializer_returns_true_if_valid_email_and_email_exist(self):
        """
        Tests that serializer.is_valid() returns False if email exist
        :return:
        """
        serializer = ResetPasswordCheckSerializer(data=self.user_data)
        self.assertTrue(serializer.is_valid())

    def test_serializer_returns_false_if_invalid_email(self):
        """
        Tests that serializer.is_valid() returns False if email does not exist
        :return:
        """
        self.user_data["email"] = "invalid_email"
        serializer = ResetPasswordCheckSerializer(data=self.user_data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], INVALID_EMAIL)

    def test_serializer_returns_false_if_valid_email_but_email_does_not_exist(self):
        """
        Tests that serializer.is_valid() returns False if email is valid but
        does not exist
        :return:
        """
        self.user_data["email"] = "test@doesnotexist.com"
        serializer = ResetPasswordCheckSerializer(data=self.user_data)
        self.assertFalse(serializer.is_valid())
        self.assertEqual(serializer.errors["email"][0], EMAIL_DOES_NOT_EXIST)
