# -*- coding: utf-8 -*-
""" 
@author: xingxingzaixian
@create: 2020/9/6
@description: 
"""
from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.

class UserInfo(AbstractUser):
    nickname = models.CharField(max_length=64, help_text='昵称')
    avatar = models.CharField(max_length=256, null=True, blank=True, help_text='头像')
    description = models.CharField(max_length=256, null=True, blank=True, help_text='自我介绍')
    telephone = models.CharField(max_length=11, blank=True, null=True, help_text='手机号码')
    create_time = models.DateTimeField(auto_now_add=True, help_text='创建时间')
    update_time = models.DateTimeField(auto_now=True, help_text='创建时间')
    
    # 默认0为无角色
    role = models.ForeignKey('TblRole', on_delete=models.SET_NULL, null=True, blank=True, db_constraint=False, help_text='角色')

    class Meta:
        db_table = 'tbl_user'

