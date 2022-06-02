from django.urls import path
from rest_framework.routers import SimpleRouter

from question.views import QuestionCategoryViewset, QuestionLevelViewset, QuestionOptionViewset, QuestionViewset, QuestionTypeViewset

router = SimpleRouter()
router.register('question', QuestionViewset)
router.register('category', QuestionCategoryViewset)
router.register('level', QuestionLevelViewset)
router.register('option', QuestionOptionViewset)
router.register('type', QuestionTypeViewset)

urlpatterns = []

urlpatterns += router.urls
