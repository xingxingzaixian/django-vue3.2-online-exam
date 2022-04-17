from django_filters.rest_framework import FilterSet
from question.models import TblQuestionOption


class OptionFilter(FilterSet):
  class Meta:
    model = TblQuestionOption
    fields = {
      'content': ['icontains'],
      'description': ['icontains'],
    }