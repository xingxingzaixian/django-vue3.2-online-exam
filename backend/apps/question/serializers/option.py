from rest_framework import serializers

from question.models import TblQuestionOption


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblQuestionOption
        fields = '__all__'