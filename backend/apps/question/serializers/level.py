from rest_framework import serializers

from question.models import TblQuestionLevel


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblQuestionLevel
        fields = '__all__'