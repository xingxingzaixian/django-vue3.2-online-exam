from rest_framework.viewsets import ModelViewSet

from question.models import TblQuestionCategory as Model
from question.serializers import QuestionCategorySerializer as Serializer


class QuestionCategoryViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer

    