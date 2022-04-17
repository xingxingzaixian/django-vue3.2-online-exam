from rest_framework.viewsets import ModelViewSet

from exam.models import TblExam as Model
from exam.serializers import ExamSerializer as Serializer
from exam.filters import ExamFilter


class ExamViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer
    filter_class = ExamFilter

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)