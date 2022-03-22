from rest_framework.permissions import BasePermission


class IsSuperUser(BasePermission):
    """
    超级用户默认拥有所有权限
    """
    def has_permission(self, request, view):
        return bool(request.user.is_superuser)