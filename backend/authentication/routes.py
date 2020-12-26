from django.urls import path

from authentication.controllers.login import LoginAPIView


app_name = "authentication"

urlpatterns = [
    path("login/", LoginAPIView.as_view({"post": "login"}), name="login")
]
