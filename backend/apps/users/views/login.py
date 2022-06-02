# -*- coding: utf-8 -*-
""" 
@author: xingxingzaixian
@create: 2020/9/6
@description: 
"""
from tkinter.messagebox import NO
from django.db.models import Q
from django.contrib.auth import authenticate
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework import status as HttpStatus
from rest_framework.generics import GenericAPIView
from django.contrib.auth.backends import UserModel
from drf_spectacular.utils import extend_schema

from users.serializers import LoginSerivalizer, RegisterSerivalizer, UserInfoSerializer
from utils.logger import logger


# Create your views here.
class LoginView(GenericAPIView):
    authentication_classes = []
    # 这里的 serializer_class 将会提供给 API 文档生成
    serializer_class = LoginSerivalizer

    @extend_schema(
        tags=['Common'],
        summary='Login',
        description='登录接口',
        responses={200: str, 401: str}
    )
    def post(self, request: Request):
        ser = LoginSerivalizer(data=request.data)
        ser.is_valid(raise_exception=True)

        username = ser.data.get('username')
        password = ser.data.get('password')

        ret = ''
        status = HttpStatus.HTTP_401_UNAUTHORIZED
        try:
            user = authenticate(request, username=username, password=password)
            ret = user.token
            status = HttpStatus.HTTP_200_OK
        except Exception as e:
            logger.error(e)
            ret = 'username or password error'

        return Response(ret, status=status)


class RegisterView(GenericAPIView):
    authentication_classes = []
    serializer_class = RegisterSerivalizer

    @extend_schema(
        tags=['Common'],
        summary='Register',
        description='注册接口',
        responses={201: UserInfoSerializer, 400: str}
    )
    def post(self, request: Request):
        ser = RegisterSerivalizer(data=request.data)
        ser.is_valid(raise_exception=True)

        username = ser.data.get('username')
        password = ser.data.get('password')

        ret = None
        status = HttpStatus.HTTP_400_BAD_REQUEST
        try:
            UserModel.objects.get(Q(username=username) | Q(telephone=username))
        except UserModel.DoesNotExist as e:
            user = UserModel(
                username=username,
                email=ser.data.get('email'),
                telephone=ser.data.get('telephone'))
            user.set_password(password)

            # 我们无需额外激活账号，所以注册是自动激活
            user.is_active = True
            user.save()
            ret = user
            logger.info('user: %s registration success', username)
            status=HttpStatus.HTTP_201_CREATED
        else:
            ret = 'user already exists'

        return Response(ret, status=status)
