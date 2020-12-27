from django.contrib.auth.password_validation import validate_password as validator
from django.core.validators import ValidationError
from django.contrib.auth import get_user_model

from rest_framework import serializers

from .error_messages import EMAIL_ALREADY_EXIST, INSECURE_PASSWORD

User = get_user_model()


def validate_password(value):
    """
    Validate password using Django's default password validation
    :param value:
    :return:
    """
    try:
        validator(value)
    except ValidationError:
        raise serializers.ValidationError(INSECURE_PASSWORD)
    return value


class LoginSerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    email = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100, trim_whitespace=True)


class SignupSerializer(serializers.Serializer):
    first_name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    password = serializers.CharField(trim_whitespace=True)

    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        """
        Create a user in the db and return it
        :param validated_data:
        :return:
        """
        data = validated_data
        data["username"] = data["email"]
        user = User.objects.create_user(**data)
        user.is_active = False
        user.save()
        return user

    def validate_email(self, value):
        """
        Raise a ValidationError if user with that email already exists
        :param value:
        :return:
        """
        user = User.objects.filter(email=value).first()
        if user is None:
            return value
        raise serializers.ValidationError(EMAIL_ALREADY_EXIST)

    def validate_password(self, value):
        """
        Validate using django's default password validators
        :param value:
        :return:
        """
        password = validate_password(value)
        return password


class ChangePasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(max_length=100, trim_whitespace=True)
    new_password = serializers.CharField(max_length=100, trim_whitespace=True)

    def validate_new_password(self, value):
        """
        Validate using django's default password
        :param value:
        :return:
        """
        password = validate_password(value)
        return password
