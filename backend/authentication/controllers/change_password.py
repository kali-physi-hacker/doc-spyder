from django.contrib.auth import get_user_model

from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.viewsets import GenericViewSet

from authentication.serializers import ChangePasswordSerializer
from authentication.error_messages import INVALID_OLD_PASSWORD

User = get_user_model()


class ChangePassword(GenericViewSet):
    permission_classes = (IsAuthenticated,)

    def change(self, request):
        """
        Change password of an existing user
        :param request:
        :return:
        """
        serializer = ChangePasswordSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_401_UNAUTHORIZED)

        if not request.user.check_password(serializer.validated_data["old_password"]):
            return Response({"success": False, "error": INVALID_OLD_PASSWORD}, status=status.HTTP_401_UNAUTHORIZED)

        request.user.set_password(serializer.validated_data["new_password"])
        request.user.save()
        return Response(
            {"success": True, "message": "Password Changed Successfully"}, status=status.HTTP_201_CREATED
        )
