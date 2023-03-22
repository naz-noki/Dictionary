import { createRouter, createWebHistory } from "vue-router";

import DictionaryApp from './components/DictionaryApp.vue'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            component: DictionaryApp
        }
    ]
}) 