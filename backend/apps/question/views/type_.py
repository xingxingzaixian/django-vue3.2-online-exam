from rest_framework.viewsets import ModelViewSet

from question.models import TblQuestionType as Model
from question.serializers import QuestionTypeSerializer as Serializer


class QuestionTypeViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer