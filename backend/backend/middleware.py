from django.utils.deprecation import MiddlewareMixin

from utils.logger import logger


class ExceptionMiddleware(MiddlewareMixin):
    def process_exception(self, request, exception):
        """
        记录所有的异常日志
        """
        logger.error(f'URL=[{request.path}], {exception}')