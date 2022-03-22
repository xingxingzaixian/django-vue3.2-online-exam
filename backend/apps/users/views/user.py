from rest_framework import mixins
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import GenericViewSet
from django.contrib.auth.backends import UserModel

from users.serializers import UserInfoSerializer as Serializer


class UserViewset(mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   mixins.ListModelMixin,
                   GenericViewSet):
    queryset = UserModel.objects.all().order_by('-date_joined')
    serializer_class = Serializer
    # 默认是模糊查询
    search_fields = ('nickname', 'email')

    @action(methods=['GET'], detail=False, url_path='get-info')
    def get_info(self, request, *args, **kwargs):
        user = request.user
        serializer = self.get_serializer(user)
        return Response(serializer.data)