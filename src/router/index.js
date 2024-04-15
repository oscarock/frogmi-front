import { createRouter, createWebHistory } from 'vue-router'
import FeaturesComponent from '../components/FeaturesComponent.vue';
import CommentsComponent from '../components/CommentsComponent.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'features',
      component: FeaturesComponent
    },
    {
      path: '/comments/:featureId',
      name: 'comments',
      component: CommentsComponent
    },
  ]
})

export default router
