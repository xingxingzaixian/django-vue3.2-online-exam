from rest_framework.viewsets import ModelViewSet

from users.models import TblClass as Model
from users.serializers import RoleSerializer as Serializer


class ClassViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer