from django.urls import path

from authentication.controllers.login import Login, VerifyLogin
from authentication.controllers.logout import Logout
from authentication.controllers.signup import Signup, ActivateAccount
from authentication.controllers.change_password import ChangePassword
from authentication.controllers.reset_password import ResetPasswordEmailCheck, ResetPassword


app_name = "authentication"

urlpatterns = [
    path("login/", Login.as_view({"post": "login"}), name="login"),
    path("login/verify", VerifyLogin.as_view({"get": "is_authenticated"}), name="verify_login"),
    path("logout/", Logout.as_view({"get": "logout", "post": "logout"}), name="logout"),
    path("signup/", Signup.as_view({"post": "create"}), name="signup"),
    path("activate/<str:token>/<str:uidb64>/", ActivateAccount.as_view({"get": "activate"}), name="activate"),
    path("change_password/", ChangePassword.as_view({"post": "change"}), name="change_password"),
    path(
        "reset_password/email/check/",
        ResetPasswordEmailCheck.as_view({"post": "check"}),
        name="reset_password_email_check",
    ),
    path(
        "reset_password/link/check/<str:token>/<str:uidb64>/",
        ResetPassword.as_view({"get": "check"}),
        name="reset_password_link_check",
    ),
    path(
        "reset_password/link/change/<str:token>/",
        ResetPassword.as_view({"post": "change"}),
        name="reset_password_change",
    ),
]
