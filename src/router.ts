import { createRouter, createWebHistory } from "vue-router";

import game from './components/DictionaryApp.vue'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/Dictionary/',
            component: game
        }
    ]
}) 