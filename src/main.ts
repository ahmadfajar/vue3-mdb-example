import App from '@/App.vue';
import DemoBlock from '@/components/DemoBlock.vue';
import router from '@/router';
import { createVueMdb } from 'vue-mdbootstrap';

import 'vue-mdbootstrap/styles';
import 'vue-mdbootstrap/color-styles';
import '@/assets/main.css';

const app = createVueMdb(App);
app.component('DemoBlock', DemoBlock).use(router).mount('#app');
