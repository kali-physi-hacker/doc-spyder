import six
from datetime import datetime, timedelta

from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.contrib.auth import get_user_model
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
from django.utils.encoding import force_bytes, force_text
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode

from jose import jwt, JWTError

User = get_user_model()


class TokenGenerator(PasswordResetTokenGenerator):
    def _make_hash_value(self, user: User, timestamp):
        """
        Uses user.pk, timestamp and user.is_active to generate a token
        :param user:
        :param timestamp:
        :return:
        """
        return six.text_type(user.pk) + six.text_type(timestamp) + six.text_type(user.is_active)


token_generator = TokenGenerator()

ENCRYPTION_ALGORITHM = "HS256"


def generate_token(data, expires_delta=15):
    """
    Generates and returns account activation token with expiration of 15 minutes
    :param data:
    :param expires_delta:
    :return:
    """
    payload = data.copy()

    if expires_delta is None:
        expires_delta = 15
    expire = datetime.utcnow() + timedelta(minutes=expires_delta)
    payload.update({"exp": expire})
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm=ENCRYPTION_ALGORITHM)
    return token


def generate_token_link(request, user, redirect_url_name, expires=None):
    """
    Generate link with token that expires
    :param request:
    :param user:
    :param redirect_url_name:
    :param expires:
    :return:
    """
    invalidation_token = token_generator.make_token(user)
    token = generate_token({"token": invalidation_token}, expires)
    current_site = get_current_site(request)
    uid = urlsafe_base64_encode(force_bytes(user.pk))
    link = f"{current_site}/{reverse(redirect_url_name, args=(token, uid))}"
    return link


def decrypt_token(token: str) -> dict:
    """
    Decrypts authentication token and returns content
    :param token:
    :return:
    """
    try:
        payload = jwt.decode(token, settings.SECRET_KEY)
    except JWTError:
        payload = None

    return payload


def validate_activation_link_token(uidb64, token):
    """
    Return a user if
    :param uidb64:
    :param token:
    :return:
    """
    try:
        uid = force_text(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
    except (ValueError, OverflowError, TypeError, User.DoesNotExist):
        user = None

    if user is not None and token_generator.check_token(user, token):
        return user
    return None
