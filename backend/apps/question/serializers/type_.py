from rest_framework import serializers

from question.models import TblQuestionType


class TypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblQuestionType
        fields = '__all__'