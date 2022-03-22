from rest_framework import serializers

from exam.models import TblExamRecord


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblExamRecord
        fields = '__all__'