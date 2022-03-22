from django.contrib.auth.backends import UserModel
from rest_framework import serializers


class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        exclude = ['password', 'first_name', 'last_name']