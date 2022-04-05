from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status as HTTPStatus

from question.models import TblQuestion as Model
from question.serializers import QuestionCreateSerializer, QuestionListSerializer


class QuestionViewset(ModelViewSet):
    queryset = Model.objects.all().order_by('id')
    serializer_class = QuestionCreateSerializer
    
    def get_serializer_class(self):
        if self.action == 'list':
            self.serializer_class = QuestionListSerializer
        return super().get_serializer_class()
    
    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)
    