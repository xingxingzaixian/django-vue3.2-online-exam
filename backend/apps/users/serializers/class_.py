from rest_framework import serializers

from users.models import TblClass


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblClass
        fields = ['name', 'tag', 'description']