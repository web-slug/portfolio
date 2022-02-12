import { createApp } from 'vue'
import routes from './router/router.js' ;
import app from './App.vue'
import header from './components/header.vue';
import footer from './components/footer.vue';
import loader from './components/loader.vue';
import logo from './components/logo.vue';


const App  =  createApp(app)
App.component('hdr',header);
App.component('ftr',footer);
App.component('loader',loader);
App.component('logo',logo);
App.use(routes)
App.mount('#app');

