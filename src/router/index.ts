import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';
import { menuNavs } from '@/router/navigation';

const routes: RouteRecordRaw[] = menuNavs.map((it) => ({
  path: it.path,
  component: it.view,
  meta: { title: it.label },
}));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.concat({ path: '/', redirect: '/components/alert' }),
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} - Vue MDBootstrap Demos`;
  document.querySelector('.md-content-wrap')?.scrollTo({ top: 0, behavior: 'smooth' });
  next();
});

export default router;
