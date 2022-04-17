from rest_framework import serializers

from exam.models import TblExamRecord


class RecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblExamRecord
        fields = '__all__'
        read_only_fields = ('score', 'joiner', 'time_cost', 'category_score')