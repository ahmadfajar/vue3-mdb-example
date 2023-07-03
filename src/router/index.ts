import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import { menuNavs } from '@/router/navigation'

const routes: RouteRecordRaw[] = menuNavs.map((it) => ({
  path: it.path,
  component: it.view,
  meta: { title: it.label }
}))

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.concat({ path: '/', redirect: '/components/alert' })
})
