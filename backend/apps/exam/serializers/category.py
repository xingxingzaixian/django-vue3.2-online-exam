from rest_framework import serializers

from exam.models import TblExamCategory


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TblExamCategory
        fields = '__all__'