import { createApp } from 'vue';

import App from './App.vue';

import './assets/main.scss';

import { store } from './index'
import router from './router'

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');