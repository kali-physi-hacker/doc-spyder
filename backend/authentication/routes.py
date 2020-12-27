from django.urls import path

from authentication.controllers.login import Login, VerifyLogin
from authentication.controllers.logout import Logout
from authentication.controllers.signup import Signup, ActivateAccount
from authentication.controllers.change_password import ChangePassword


app_name = "authentication"

urlpatterns = [
    path("login/", Login.as_view({"post": "login"}), name="login"),
    path("login/verify", VerifyLogin.as_view({"get": "is_authenticated"}), name="verify_login"),
    path("logout/", Logout.as_view({"get": "logout", "post": "logout"}), name="logout"),
    path("signup/", Signup.as_view({"post": "create"}), name="signup"),
    path("activate/<str:token>/<str:uidb64>/", ActivateAccount.as_view({"get": "activate"}), name="activate"),
    path("change_password/", ChangePassword.as_view({"post": "change"}), name="change_password")
]
