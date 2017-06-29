import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  token: localStorage.getItem('token'),
};

export default new Vuex.Store({
  state,
});
