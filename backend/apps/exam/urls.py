from django.urls import path
from rest_framework.routers import SimpleRouter

from exam.views import ExamViewset, CategoryViewset, ExamViewset, LevelViewset, RecordViewset

router = SimpleRouter()
router.register('exam', ExamViewset)
router.register('record', RecordViewset)
router.register('category', CategoryViewset)
router.register('level', LevelViewset)

urlpatterns = [
]

urlpatterns += router.urls
