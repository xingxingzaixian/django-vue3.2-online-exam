from rest_framework.viewsets import ModelViewSet

from exam.models import TblExamCategory as Model
from exam.serializers import ExamCategorySerializer as Serializer


class ExamCategoryViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer