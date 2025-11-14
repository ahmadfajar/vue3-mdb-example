import { createVueMdb } from 'vue-mdbootstrap';
import DemoBlock from '../components/DemoBlock.vue';
import ShowcaseBox from '../components/ShowcaseBox.vue';
import App from './App.vue';
import ContentLayout from './ContentLayout.vue';
import router from './router';

import 'vue-mdbootstrap/css-core';
import './assets/main.css';

createVueMdb(App)
  .component('DemoBlock', DemoBlock)
  .component('ShowcaseBox', ShowcaseBox)
  .component('ContentLayout', ContentLayout)
  .use(router)
  .mount('#app');
