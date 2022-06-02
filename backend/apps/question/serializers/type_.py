from rest_framework import serializers

from question.models import TblQuestionType


class QuestionTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblQuestionType
        fields = '__all__'