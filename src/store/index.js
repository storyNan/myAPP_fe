import Vue from 'vue';
import Vuex from 'vuex';

import login from './modules/login';

Vue.use(Vuex);

const state = {};
const actions = {};
const mutations = {};
const store = new Vuex.Store({
    modules: {
        login
    },
    actions,
    state,
    mutations,
})
export default store;