from django.contrib.auth import get_user_model
from django.contrib.auth.models import update_last_login
from django.utils import datetime_safe

from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework import status

from authentication.serializers import ResetPasswordCheckSerializer, ResetPasswordChangeSerializer
from authentication.helpers import generate_token_link, validate_activation_link_token, decrypt_token, generate_token
from authentication.error_messages import INVALID_TOKEN_LINK
from authentication.success_messages import PASSWORD_CHANGED_SUCCESS

User = get_user_model()


class ResetPasswordEmailCheck(GenericViewSet):
    def check(self, request):
        """
        Check if user email exists and send reset password link
        :param request:
        :return:
        """
        serializer = ResetPasswordCheckSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({"success": False, "error": serializer.errors}, status=status.HTTP_403_FORBIDDEN)

        # Generate password reset link here and send email
        user = User.objects.get(email=serializer.validated_data["email"])
        password_reset_link = generate_token_link(request, user, "authentication:reset_password_link_check", 20)

        return Response(
            {"success": True, "password_reset_link": password_reset_link}
        )  # Password Reset Link in response data only for testing


class ResetPassword(GenericViewSet):
    def check(self, request, token, uidb64):
        """
        Checks that the reset password link is valid and redirects to frontend end to change password
        :param request:
        :param uidb64:
        :param token:
        :return:
        """
        token = decrypt_token(token)["token"]
        user = validate_activation_link_token(uidb64, token)
        if user is None:
            return Response({"success": False, "error": INVALID_TOKEN_LINK}, status=status.HTTP_401_UNAUTHORIZED)

        update_last_login(None, user)
        # TODO: Redirect to frontend for the new password page
        #  frontend url should contain a token generated here with the same
        #  SECRET_KEY (frontend) and validated

        # TODO: Simulate token generation and redirect to frontend containing token

        token = generate_token({"user_id": user.pk})
        return Response({"success": True, "token": token})

    def change(self, request, token):
        """
        Change the password of the user
        :param request:
        :param token:
        :return:
        """
        payload = decrypt_token(token)
        if payload is None:
            return Response({"success": False, "error": INVALID_TOKEN_LINK}, status=status.HTTP_403_FORBIDDEN)

        user = User.objects.filter(pk=payload["user_id"]).first()
        if user is None:
            return Response({"success": False, "error": INVALID_TOKEN_LINK}, status=status.HTTP_401_UNAUTHORIZED)

        serializer = ResetPasswordChangeSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({"success": False, "error": serializer.errors}, status=status.HTTP_403_FORBIDDEN)

        user.set_password(serializer.validated_data["password"])
        user.save()
        return Response({"success": True, "message": PASSWORD_CHANGED_SUCCESS}, status=status.HTTP_201_CREATED)
