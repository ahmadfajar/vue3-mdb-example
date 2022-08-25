import { createApp } from 'vue'
import { BsAnimationPlugin } from '../../vue-mdbootstrap/src/components/Animation'
import { BsAvatarPlugin } from '../../vue-mdbootstrap/src/components/Avatar'
import { BsBadgePlugin } from '../../vue-mdbootstrap/src/components/Badge'
import { BsBasicCmpPlugin } from '../../vue-mdbootstrap/src/components/Basic'
import { BsButtonPlugin } from '../../vue-mdbootstrap/src/components/Button'
import { BsCardPlugin } from '../../vue-mdbootstrap/src/components/Card'
import { BsIconPlugin } from '../../vue-mdbootstrap/src/components/Icon'
import { BsProgressPlugin } from '../../vue-mdbootstrap/src/components/Progress'
import router from '@/router'
import App from './App.vue'

createApp(App)
  .use(BsAnimationPlugin)
  .use(BsAvatarPlugin)
  .use(BsBadgePlugin)
  .use(BsBasicCmpPlugin)
  .use(BsButtonPlugin)
  .use(BsCardPlugin)
  .use(BsIconPlugin)
  .use(BsProgressPlugin)
  .use(router)
  .mount('#app')
