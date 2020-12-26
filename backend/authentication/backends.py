from django.middleware.csrf import CsrfViewMiddleware
from django.contrib.auth import get_user_model

from rest_framework.authentication import BaseAuthentication
from rest_framework import exceptions

from .helpers import decrypt_token
from .error_messages import INVALID_AUTH_TOKEN, TOKEN_PREFIX_FAILED, USER_NOT_FOUND, USER_CANT_LOGIN

User = get_user_model()


class CSRFCheck(CsrfViewMiddleware):
    def _reject(self, request, reason):
        """
        Returns a failure reason as opposed to return an HttpResponse
        :param request:
        :param reason:
        :return:
        """
        return reason


class SafeJWTAuthentication(BaseAuthentication):
    """
    Custom Authentication class that uses from cookie (http-only) rather
    than Authorization key in headers
    """

    def authenticate(self, request):
        """
        Authenticates user using Authorization in cookie and returns user,
        returns None otherwise
        :param request:
        :return:
        """

        """
        TODO: What is happening ?
            1. get the authorization key from the cookies
            2. get the token from the authorization cookie value
            3. decrypt the token
            4. get user using the user_id from the decrypted token
            5. enforce csrf check
            6. return a tuple (user, None)
        """
        authorization_cookie = request.COOKIES.get("Authorization") or request.headers.get("Authorization")

        if not authorization_cookie:
            return None

        try:
            access_token = authorization_cookie.split(" ")[1]
        except IndexError:
            raise exceptions.AuthenticationFailed(TOKEN_PREFIX_FAILED)

        payload = decrypt_token(access_token)

        if payload is None:
            raise exceptions.AuthenticationFailed(INVALID_AUTH_TOKEN)

        user = User.objects.filter(id=payload["user_id"]).first()

        if user is None:
            raise exceptions.AuthenticationFailed(USER_NOT_FOUND)

        if not user.is_active:
            raise exceptions.AuthenticationFailed(USER_CANT_LOGIN)

        self.enforce_csrf(request)
        return user, None

    def enforce_csrf(self, request):
        """
        Enforces CSRF Validation
        :param request:
        :return:
        """
        return
