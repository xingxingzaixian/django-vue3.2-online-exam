from django_filters import FilterSet
from exam.models import TblExam


class ExamFilter(FilterSet):
  class Meta:
    model = TblExam
    fields = {
      'name': ['icontains', 'exact'],
      'description': ['icontains'],
    }