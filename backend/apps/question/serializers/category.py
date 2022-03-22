from rest_framework import serializers

from question.models import TblQuestionCategory


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TblQuestionCategory
        fields = '__all__'