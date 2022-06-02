# -*- coding: utf-8 -*-
""" 
@author: xingxingzaixian
@create: 2020/9/6
@description: 
"""
import time
from django.db.models import Q
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth.backends import UserModel
from drf_spectacular.extensions import OpenApiAuthenticationExtension
from drf_spectacular.plumbing import build_bearer_security_scheme_object

from utils.auth.jwt_util import JwtUtil
from threading import local

_thread_local = local()


class JwtAuthentication(BaseAuthentication):
    keyword = 'Bearer'
    
    def authenticate(self, request):
        access_token = request.META.get('HTTP_AUTHORIZATION', None)
        if access_token:
            data = JwtUtil.check_jwt_token(access_token.split(' ')[-1])
            if data:
                username = data.get('username')
                exp = data.get('exp')
                if time.time() > exp:
                    raise AuthenticationFailed('authentication timeout')

                try:
                    user = UserModel.objects.get(username=username)
                    _thread_local.user = user
                except (UserModel.DoesNotExist, UserModel.MultipleObjectsReturned) as e:
                    return (None, None)
                else:
                    return (user, None)

        raise AuthenticationFailed('authentication failed')

def get_current_user():
    return getattr(_thread_local, 'user', None)


class JWTTokenScheme(OpenApiAuthenticationExtension):
    target_class = 'utils.auth.authentication.JwtAuthentication'
    name = 'JwtTokenAuth'
    match_subclasses = True
    priority = 1

    def get_security_definition(self, auto_schema):
        return build_bearer_security_scheme_object(
            header_name='Authorization',
            token_prefix=self.target.keyword,
            bearer_format='JWT'
        )