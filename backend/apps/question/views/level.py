from rest_framework.viewsets import ModelViewSet

from question.models import TblQuestionLevel as Model
from question.serializers import LevelSerializer as Serializer


class LevelViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer