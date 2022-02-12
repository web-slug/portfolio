import { createRouter,createWebHistory  } from 'vue-router'
import home from '../pages/home.vue';
import welcome from '../pages/welcome.vue';


const router =  createRouter ({
    history: createWebHistory(),
    routes: [
        { path: '/', component: home },
        { path: '/welcome', component: welcome }
    ]
})


export default router