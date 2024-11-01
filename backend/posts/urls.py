from django.urls import path
from .views import PostListCreateView, PostDeleteView

urlpatterns = [
    path('', PostListCreateView.as_view(), name='post-list-create'),
    path('<int:pk>/', PostDeleteView.as_view(), name='post-delete'),
]