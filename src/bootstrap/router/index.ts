import { menuNavs } from '@bs/router/navigation';
import { StringHelper } from 'vue-mdbootstrap';
import type { RouteComponent, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [];

menuNavs.forEach((it) => {
  if (it.children) {
    const children: RouteRecordRaw[] = it.children.map((child) => ({
      path: child.path,
      name: StringHelper.kebabCase(child.label),
      component: child.view,
      meta: { title: child.label },
    }));

    routes.push(...children);
  } else {
    const home: RouteRecordRaw = {
      path: it.path as string,
      name: StringHelper.kebabCase(it.label),
      component: it.view as RouteComponent,
      meta: { title: it.label },
    };

    routes.push(home);
  }
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.concat({ path: '/', name: 'start-up', redirect: '/home' }),
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | Vue MDBootstrap Demos`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  next();
});

export default router;
