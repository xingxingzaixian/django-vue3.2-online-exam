from rest_framework.viewsets import ModelViewSet

from question.models import TblQuestionOption as Model
from question.serializers import QuestionOptionSerializer as Serializer
from question.filters import QuestionOptionFilter


class QuestionOptionViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer
    filter_class = QuestionOptionFilter