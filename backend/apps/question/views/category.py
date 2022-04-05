from rest_framework.viewsets import ModelViewSet

from question.models import TblQuestionCategory as Model
from question.serializers import CategorySerializer as Serializer


class CategoryViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('-id')
    serializer_class = Serializer

    