from rest_framework.viewsets import ModelViewSet

from exam.models import TblExamLevel as Model
from exam.serializers import ExamLevelSerializer as Serializer


class ExamLevelViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer