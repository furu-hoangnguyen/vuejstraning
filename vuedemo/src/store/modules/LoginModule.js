import DOMAIN from '../../api/ListBaseDomain';
import cookie from 'vue-cookie';

const state = {
    dataLogin: {},
    formLogin: {
        name: '',
        password: '',
    }
}

const actions = {
    act_loginUser({ commit, state }) {
        return DOMAIN.LOGIN_USER(state.formLogin).then(function(response) {
            if (response.status == 200) {
                alert("login success");
                commit("mut_resetFormlogin")
                commit("mut_setDataUserLogin", response.data.user)
                cookie.set('token', response.headers["x-auth-token"], { expires: '1d' });
                cookie.set('dataUser', JSON.stringify(response.data.user), { expires: '1d' })
            } else {
                alert("login fail");
            }
        }).catch(function(error) {
            console.log(error.response);
            commit("mut_resetFormlogin");
        });

    }
};
const getters = {

};
const mutations = {
    mut_setDataUserLogin(state, payload) {
        state.dataLogin = payload
    },
    mut_resetFormlogin(state) {
        state.formLogin = {
            name: '',
            password: ''
        }
    },
}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}