from rest_framework import serializers

from users.models import TblRole


class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = TblRole
        fields = '__all__'