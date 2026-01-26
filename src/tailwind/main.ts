import { createVueMdb } from 'vue-mdbootstrap';
import DemoBlock from '../components/DemoBlock.vue';
import ShoutBox from '../components/ShoutBox.vue';
import App from './App.vue';
import ContentLayout from './ContentLayout.vue';
import router from './router';

import 'vue-mdbootstrap/styles';
import 'vue-mdbootstrap/theme-light';
// prettier-ignore
import 'vue-mdbootstrap/theme-dark';
import './assets/main.css';

createVueMdb(App)
  .component('DemoBlock', DemoBlock)
  .component('ShoutBox', ShoutBox)
  .component('ContentLayout', ContentLayout)
  .use(router)
  .mount('#app');
