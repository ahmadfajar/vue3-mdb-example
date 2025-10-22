import { menuNavs } from '@bs/router/navigation';
import { StringHelper } from 'vue-mdbootstrap';
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = menuNavs.map((it) => ({
  path: it.path,
  name: StringHelper.kebabCase(it.label),
  component: it.view,
  meta: { title: it.label },
}));

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.concat({ path: '/', name: 'start-up', redirect: '/components/alert' }),
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | Vue MDBootstrap Demos`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  next();
});

export default router;
