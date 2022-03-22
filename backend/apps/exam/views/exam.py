from rest_framework.viewsets import ModelViewSet

from exam.models import TblExam as Model
from exam.serializers import ExamSerializer as Serializer


class ExamViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer