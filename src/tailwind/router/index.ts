import { menuNavs } from '@tw/router/navigation';
import { StringHelper } from 'vue-mdbootstrap';
import type { RouteComponent, RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHistory } from 'vue-router';

const routes: RouteRecordRaw[] = [];

menuNavs.forEach((it) => {
  if (it.children) {
    const children: RouteRecordRaw[] = it.children.map((child) => {
      return {
        path: child.path,
        name: child.name || StringHelper.kebabCase(child.text),
        component: child.view,
        meta: { title: child.text },
      };
    });

    routes.push(...children);
  } else {
    const home: RouteRecordRaw = {
      path: it.path as string,
      name: StringHelper.kebabCase(it.text),
      component: it.view as RouteComponent,
      meta: { title: it.text },
    };

    routes.push(home);
  }
});

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.concat({ path: '/', name: 'start-up', redirect: '/home' }),
  scrollBehavior() {
    return { top: 0 };
  },
});

router.beforeEach((to, _from, next) => {
  document.title = `${to.meta.title} | Vue MDBootstrap Demos`;
  next();
});

export default router;
