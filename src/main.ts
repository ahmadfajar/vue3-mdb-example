import { createApp } from 'vue'
import * as _plugins from '../../vue-mdbootstrap/src/components'
import AxiosPlugin from '../../vue-mdbootstrap/src/utils/AxiosPlugin'
import DemoBlock from '@/DemoBlock.vue'
import router from '@/router'
import App from './App.vue'

const app = createApp(App)
Object.values(_plugins).forEach(plg => app.use(plg))

app.component('DemoBlock', DemoBlock)
  .use(AxiosPlugin)
  .use(router).mount('#app')
