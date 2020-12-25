from django.contrib.auth.password_validation import validate_password
from django.core.validators import ValidationError
from django.contrib.auth import get_user_model

from rest_framework import serializers

User = get_user_model()


class LoginSerializer(serializers.Serializer):
    def update(self, instance, validated_data):
        pass

    def create(self, validated_data):
        pass

    email = serializers.CharField(max_length=100)
    password = serializers.CharField(max_length=100)


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
        return User.objects.create_user(**data)

    def validate_password(self, value):
        """
        Validate using django's default password validators
        :param value:
        :return:
        """
        try:
            validate_password(value)
        except ValidationError:
            raise serializers.ValidationError(str(ValidationError))
        return value
