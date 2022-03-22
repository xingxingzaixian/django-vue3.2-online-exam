# -*- coding: utf-8 -*-
""" 
@author: xingxingzaixian
@create: 2020/9/6
@description: 
"""
from django.contrib.auth import backends
from django.db.models import Q
from django.contrib.auth.backends import UserModel

from utils.auth.jwt_util import JwtUtil
from utils.logger import logger


class UserBackend(backends.ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = UserModel.objects.get(Q(username=username) | Q(telephone=username))
            if user.check_password(password):
                token = JwtUtil.gen_jwt_token(user)
                user.token = token
                return user
        except UserModel.DoesNotExist as e:
            logger.error(f'[username={username}]: {e}')
