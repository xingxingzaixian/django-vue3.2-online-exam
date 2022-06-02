from rest_framework import serializers

from question.models import TblQuestionCategory


class QuestionCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TblQuestionCategory
        fields = '__all__'