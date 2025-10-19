import { createVueMdb } from 'vue-mdbootstrap';
import DemoBlock from '../components/DemoBlock.vue';
import App from './App.vue';
import router from './router';

import 'vue-mdbootstrap/styles';

createVueMdb(App).component('DemoBlock', DemoBlock).use(router).mount('#app');
