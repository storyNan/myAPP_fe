import Vue  from 'vue';
import Router from 'vue-router';

import login from '@/views/login';
import home from '@/views/home';
import accountList from '@/views/accountList';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: login},
        {path:'/home', name: 'home', component:home },
        {path:'/accountList', name: 'accountList', component:accountList }
    ]
})