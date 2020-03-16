const state = {
    session_id: "",
    user: "",
    userPwd: ""
}

const getters = {}

const actions = {}

const mutations = {
    getSession_id(state, value) {
        state.session_id = value;
    },
    getUser(state, value) {
        state.usermobile = value;
    },
    getUserPwd(state, value) {
        state.userPwd = value;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}