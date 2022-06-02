from django.urls import path
from rest_framework.routers import SimpleRouter

from exam.views import ExamViewset, ExamCategoryViewset, ExamViewset, ExamLevelViewset, RecordViewset

router = SimpleRouter()
router.register('exam', ExamViewset)
router.register('record', RecordViewset)
router.register('category', ExamCategoryViewset)
router.register('level', ExamLevelViewset)

urlpatterns = [
]

urlpatterns += router.urls
