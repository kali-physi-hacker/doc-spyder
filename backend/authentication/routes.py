from django.urls import path

from authentication.controllers.login import Login, VerifyLogin
from authentication.controllers.logout import Logout


app_name = "authentication"

urlpatterns = [
    path("login/", Login.as_view({"post": "login"}), name="login"),
    path("login/verify", VerifyLogin.as_view({"get": "is_authenticated"}), name="verify_login"),
    path("logout/", Logout.as_view({"get": "logout", "post": "logout"}), name="logout"),
]
