import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { menuNavs } from '@/navigation'

const routes: RouteRecordRaw[] = menuNavs.map((it) => ({
  path: it.path,
  component: it.view,
  meta: { title: it.title }
}))

routes.push({ path: '/', redirect: '/components/alert' })

export default createRouter({
  history: createWebHistory(),
  routes
})
