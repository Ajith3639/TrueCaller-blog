import { createRouter, createWebHistory } from 'vue-router'
import PageHeader from '@/components/common/PageHeader.vue'

const BlogMain = () => import('@/components/common/BlogMain.vue')
const DetailedArticle = () => import('@/components/detailView/DetailedArticle.vue')

const routes = [
  {
    path: '/',
    component: PageHeader,
    children: [
      {
        path: '',
        name: 'Home',
        component: BlogMain
      },
      {
        path: 'blog/:slug',
        name: 'ArticleDetails',
        component: DetailedArticle,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
