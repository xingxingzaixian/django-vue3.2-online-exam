from rest_framework import serializers

from exam.models import TblExam


class ExamSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblExam
        fields = '__all__'
        read_only_fields = ('id', 'score', 'creator', 'create_time', 'update_time')

