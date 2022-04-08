from rest_framework import serializers
from django.contrib.auth.backends import UserModel

from question.models import (
    TblQuestion
)


class QuestionCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblQuestion
        fields = '__all__'
        read_only_fields = ['id', 'create_time', 'update_time', 'creator']


class QuestionListSerializer(serializers.ModelSerializer):
    creator = serializers.StringRelatedField(source='creator.nickname')
    level = serializers.StringRelatedField(source='level_tag.description')
    type = serializers.StringRelatedField(source='type_tag.description')
    category = serializers.StringRelatedField(source='category_tag.name')

    class Meta:
        model = TblQuestion
        fields = ['id', 'content', 'description', 'creator', 'level', 'type', 'category', 'create_time', 'update_time']
