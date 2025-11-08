import { createVueMdb } from 'vue-mdbootstrap';
import DemoBlock from '../components/DemoBlock.vue';
import ShowcaseBox from '../components/ShowcaseBox.vue';
import App from './App.vue';
import router from './router';

// prettier-ignore
import 'vue-mdbootstrap/css-core';
// prettier-ignore
import 'vue-mdbootstrap/css-colors';

createVueMdb(App)
  .component('DemoBlock', DemoBlock)
  .component('ShowcaseBox', ShowcaseBox)
  .use(router)
  .mount('#app');
