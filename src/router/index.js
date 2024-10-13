import { createRouter, createWebHistory } from 'vue-router'
import PageHeader from '@/components/common/PageHeader.vue'

const BlogMain = () => import('@/components/common/BlogMain.vue')
const DetailedArticle = () => import('@/components/detailView/DetailedArticle.vue')
const ErrorPage = () => import('@/components/common/ErrorPage.vue')

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
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'ErrorPage',
        component: ErrorPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
