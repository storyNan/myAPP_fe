import Vue  from 'vue';
import Router from 'vue-router';

import home from '@/views/home';
import accountList from '@/views/accountList';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path:'/', name: 'home', component:home },
        {path:'/accountList', name: 'accountList', component:accountList }
    ]
})