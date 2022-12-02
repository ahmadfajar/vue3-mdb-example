import { createApp } from 'vue'
import { BsAnimationPlugin } from '../../vue-mdbootstrap/src/components/Animation'
import { BsContainerPlugin } from '../../vue-mdbootstrap/src/components/Container'
import { BsAlertPlugin } from '../../vue-mdbootstrap/src/components/Alert'
import { BsAppbarPlugin } from '../../vue-mdbootstrap/src/components/Appbar'
import { BsAvatarPlugin } from '../../vue-mdbootstrap/src/components/Avatar'
import { BsBadgePlugin } from '../../vue-mdbootstrap/src/components/Badge'
import { BsBasicCmpPlugin } from '../../vue-mdbootstrap/src/components/Basic'
import { BsButtonPlugin } from '../../vue-mdbootstrap/src/components/Button'
import { BsCardPlugin } from '../../vue-mdbootstrap/src/components/Card'
import { BsCheckboxPlugin } from '../../vue-mdbootstrap/src/components/Checkbox'
import { BsChipPlugin } from '../../vue-mdbootstrap/src/components/Chip'
import { BsDrawerPlugin } from '../../vue-mdbootstrap/src/components/Drawer'
import { BsFieldPlugin } from '../../vue-mdbootstrap/src/components/Field'
import { BsIconPlugin } from '../../vue-mdbootstrap/src/components/Icon'
import { BsProgressPlugin } from '../../vue-mdbootstrap/src/components/Progress'
import { BsRadioPlugin } from '../../vue-mdbootstrap/src/components/Radio'
import { BsTabsPlugin } from '../../vue-mdbootstrap/src/components/Tabs'
import router from '@/router'
import App from './App.vue'

createApp(App)
  .use(BsAnimationPlugin)
  .use(BsAlertPlugin)
  .use(BsAppbarPlugin)
  .use(BsAvatarPlugin)
  .use(BsBadgePlugin)
  .use(BsBasicCmpPlugin)
  .use(BsButtonPlugin)
  .use(BsCardPlugin)
  .use(BsCheckboxPlugin)
  .use(BsChipPlugin)
  .use(BsContainerPlugin)
  .use(BsDrawerPlugin)
  .use(BsFieldPlugin)
  .use(BsIconPlugin)
  .use(BsProgressPlugin)
  .use(BsRadioPlugin)
  .use(BsTabsPlugin)
  .use(router)
  .mount('#app')
