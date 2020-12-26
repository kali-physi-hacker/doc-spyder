from django.urls import path

from authentication.controllers.login import Login, VerifyLogin


app_name = "authentication"

urlpatterns = [
    path("login/", Login.as_view({"post": "login"}), name="login"),
    path("login/verify", VerifyLogin.as_view({"get": "is_authenticated"}), name="verify_login"),
]
