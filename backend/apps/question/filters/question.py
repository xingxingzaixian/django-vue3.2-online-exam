from django_filters.rest_framework import FilterSet
from question.models import TblQuestion


class QuestionFilter(FilterSet):
  class Meta:
    model = TblQuestion
    fields = {
      'content': ['icontains'],
      'description': ['icontains'],
    }