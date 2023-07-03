import 'vue-mdbootstrap/styles';

import { createVueMdb } from 'vue-mdbootstrap';
import DemoBlock from '@/components/DemoBlock.vue';
import App from '@/App.vue';
import router from '@/router';

const app = createVueMdb(App);
app.component('DemoBlock', DemoBlock).use(router).mount('#app');
