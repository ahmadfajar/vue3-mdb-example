import { createRouter, createWebHashHistory } from 'vue-router'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const viewResolver = (name: string) => require('./components/' + name).default

const navigations = [{
  path: '/',
  redirect: '/components/alert'
}, {
  path: '/components/alert',
  component: viewResolver('Alert/DemoAlert'),
  meta: { title: 'Demo Alert' }
}, {
  path: '/components/avatar',
  component: viewResolver('Avatar/DemoAvatar'),
  meta: { title: 'Demo Avatar' }
}, {
  path: '/components/badge',
  component: viewResolver('Badge/DemoBadge'),
  meta: { title: 'Demo Badge' }
}, {
  path: '/components/button',
  component: viewResolver('Button/DemoButton'),
  meta: { title: 'Demo Button' }
}, {
  path: '/components/button-toggle',
  component: viewResolver('Button/DemoToggleButton'),
  meta: { title: 'Demo Toggle Button' }
}, {
  path: '/components/card',
  component: viewResolver('Card/DemoCard'),
  meta: { title: 'Demo Card' }
}, {
  path: '/components/icon',
  component: viewResolver('Icon/DemoIcon'),
  meta: { title: 'Demo Icon' }
}, {
  path: '/components/mask-loader',
  component: viewResolver('Progress/DemoMaskLoader'),
  meta: { title: 'Demo Mask Loader' }
}, {
  path: '/components/progress',
  component: viewResolver('Progress/DemoProgress'),
  meta: { title: 'Demo Progress Control' }
}, {
  path: '/components/progress-bar',
  component: viewResolver('Progress/DemoProgressBar'),
  meta: { title: 'Demo Progress Bar' }
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
