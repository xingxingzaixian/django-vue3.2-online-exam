from rest_framework.viewsets import ModelViewSet

from exam.models import TblExamRecord as Model
from exam.serializers import RecordSerializer as Serializer


class RecordViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer