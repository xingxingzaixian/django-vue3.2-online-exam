from rest_framework.viewsets import ModelViewSet

from question.models import TblQuestionLevel as Model
from question.serializers import QuestionLevelSerializer as Serializer


class QuestionLevelViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer