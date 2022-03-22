from django.urls import path
from rest_framework.routers import SimpleRouter

from question.views import CategoryViewset, LevelViewset, OptionViewset, QuestionViewset, TypeViewset

router = SimpleRouter()
router.register('question', QuestionViewset)
router.register('category', CategoryViewset)
router.register('level', LevelViewset)
router.register('option', OptionViewset)
router.register('type', TypeViewset)

urlpatterns = []

urlpatterns += router.urls
