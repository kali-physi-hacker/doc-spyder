from django.contrib.auth import authenticate
from django.conf import settings

from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import GenericViewSet
from rest_framework_simplejwt.tokens import RefreshToken

from authentication.serializers import LoginSerializer


def generate_auth_token(user):
    """
    Generate authentication token for a user valid for a period
    :param user:
    :return:
    """
    refresh = RefreshToken.for_user(user)
    return {"access": str(refresh.access_token)}


class LoginAPIView(GenericViewSet):

    def login(self, request):
        """
        Login User and set Authorization token as cookie
        :param request:
        :return:
        """

        serializer = LoginSerializer(data=request.data)

        if serializer.is_valid():
            username = serializer.validated_data["email"]
            password = serializer.validated_data["password"]
            user = authenticate(username=username, password=password)

            if user is None:
                return Response({"error": "Invalid Username of Password"}, status=status.HTTP_401_UNAUTHORIZED)

            # Generate auth token and set cookie headers here
            auth_token = generate_auth_token(user)

            response = Response({"success": True}, status=status.HTTP_200_OK)
            response.set_cookie(
                "Authorization", value=f"Bearer {auth_token}", httponly=False,
                max_age=settings.COOKIE_MAX_AGE, expires=settings.COOKIE_MAX_AGE, samesite=None,
                secure=settings.COOKIE_SECURE
            )
            return response
