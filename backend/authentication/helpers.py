from django.conf import settings
from jose import jwt, JWTError


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
