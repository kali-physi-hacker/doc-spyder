from django.contrib.auth import get_user_model
from django.utils.encoding import force_text, force_bytes

from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import GenericViewSet

from authentication.serializers import SignupSerializer
from authentication.helpers import generate_token_link, decrypt_token, validate_activation_link_token
from authentication import error_messages

User = get_user_model()


class Signup(GenericViewSet):

    def create(self, request):
        """
        Register user and send email for user account activation
        :param request:
        :return:
        """
        serializer = SignupSerializer(data=request.data)

        if not serializer.is_valid():
            errors = {"success": False, "errors": serializer.errors}
            return Response(errors, status=status.HTTP_403_FORBIDDEN)

        user = serializer.save()

        # Registration successful ==> Send an email including the activation
        account_activation_link = generate_token_link(request, user, "authentication:activate", 60)

        return Response({"success": True, "activation_link": account_activation_link}, status=status.HTTP_201_CREATED)


class ActivateAccount(GenericViewSet):
    def activate(self, request, token, uidb64):
        """
        Activate account and redirect to frontend (React) Success Page
        :param request:
        :param token:
        :param uidb64:
        :return:
        """

        token = decrypt_token(token)["token"]
        user = validate_activation_link_token(uidb64, token)
        if user is None:
            return Response({"success": False, "error": error_messages.INVALID_TOKEN_LINK}, status=status.HTTP_403_FORBIDDEN)

        user.is_active = True
        user.save()
        return Response({"success": True, "message": "Account Activated Successfully"})
