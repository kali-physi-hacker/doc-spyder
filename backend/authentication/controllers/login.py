from django.contrib.auth import authenticate
from django.conf import settings

from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import GenericViewSet
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated

from authentication.serializers import LoginSerializer
from authentication import error_messages


def generate_auth_token(user):
    """
    Generate authentication token for a user valid for a period
    :param user:
    :return:
    """
    refresh = RefreshToken.for_user(user)
    return {"access": str(refresh.access_token)}


class Login(GenericViewSet):
    def login(self, request):
        """
        Login User and set Authorization token as cookie
        :param request:
        :return:
        """

        serializer = LoginSerializer(data=request.data)

        if not serializer.is_valid():
            data = serializer.errors
            data["success"] = False
            return Response(data, status=status.HTTP_403_FORBIDDEN)

        username = serializer.validated_data["email"]
        password = serializer.validated_data["password"]
        user = authenticate(username=username, password=password)

        if user is None:
            return Response(
                {"success": False, "error": error_messages.INVALID_LOGIN_CREDENTIALS},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        # Generate auth token and set cookie headers here
        auth_token = generate_auth_token(user)["access"]

        response = Response({"success": True}, status=status.HTTP_200_OK)
        response.set_cookie(
            "Authorization",
            value=f"Bearer {auth_token}",
            httponly=True,
            max_age=settings.COOKIE_MAX_AGE,
            expires=settings.COOKIE_MAX_AGE,
            samesite=None,
            secure=settings.COOKIE_SECURE,
        )
        return response


class VerifyLogin(GenericViewSet):

    permission_classes = (IsAuthenticated,)

    def is_authenticated(self, request):
        """
        Verify that user can be authenticated using http-Only cookie
        :param request:
        :return:
        """
        return Response({"success": True}, status=status.HTTP_200_OK)
