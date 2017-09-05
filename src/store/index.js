import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';

Vue.use(Vuex);

const State = {
  token: localStorage.getItem('token'),
};

export default new Vuex.Store({
  state: State,
  modules: {
    user,
  },
});
