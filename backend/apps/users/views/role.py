from rest_framework.viewsets import ModelViewSet

from users.models import TblRole as Model
from users.serializers import RoleSerializer as Serializer


class RoleViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer