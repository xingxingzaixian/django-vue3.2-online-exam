from rest_framework import serializers

from exam.models import TblExamLevel


class LevelSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblExamLevel
        fields = '__all__'