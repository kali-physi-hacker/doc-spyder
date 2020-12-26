from rest_framework.viewsets import GenericViewSet
from rest_framework.response import Response
from rest_framework import status


class Logout(GenericViewSet):
    def logout(self, request):
        """
        Delete the authorization cookie
        :param request:
        :return:
        """

        response = Response({"success": True}, status=status.HTTP_200_OK)
        response.delete_cookie("Authorization")
        return response
