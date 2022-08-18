import { createRouter, createWebHashHistory } from 'vue-router'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const viewResolver = (name: string) => require('./components/' + name).default

const navigations = [{
  path: '/',
  redirect: '/components/avatar'
}, {
  path: '/components/avatar',
  component: viewResolver('Avatar/DemoAvatar'),
  meta: { title: 'Demo Avatar' }
}, {
  path: '/components/badge',
  component: viewResolver('Badge/DemoBadge'),
  meta: { title: 'Demo Badge' }
}, {
  path: '/components/card',
  component: viewResolver('Card/DemoCard'),
  meta: { title: 'Demo Card' }
}, {
  path: '/components/icon',
  component: viewResolver('Icon/DemoIcon'),
  meta: { title: 'Demo Icon' }
}, {
  path: '/components/ripple',
  component: viewResolver('Animation/DemoRipple'),
  meta: { title: 'Demo Ripple' }
}, {
  path: '/reference/color',
  component: viewResolver('Color/DemoColor'),
  meta: { title: 'Color Variants' }
}]

export default createRouter({
  history: createWebHashHistory(),
  routes: navigations
})
