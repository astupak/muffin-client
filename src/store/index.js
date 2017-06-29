import Vue from 'vue';
import Vuex from 'vuex';
import Api from '@/api';

Vue.use(Vuex);

const State = {
  token: localStorage.getItem('token'),
};

export default new Vuex.Store({
  state: State,
  mutations: {
    login(state, token) {
      console.log(2);
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const response = await Api.users.login(email, password);
      console.log(1, response);
      commit('login', response.formattedToken);
    },
  },
});
