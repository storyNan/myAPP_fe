import Vue  from 'vue';
import Router from 'vue-router';

import login from '@/views/login';
import home from '@/views/home';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: login},
        {path:'/home', name: 'home', component:home }
    ]
})