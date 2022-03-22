from rest_framework.viewsets import ModelViewSet

from question.models import TblQuestion as Model
from question.serializers import QuestionSerializer as Serializer


class QuestionViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer