import Api from '@/api';

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || null,
    name: null,
  },

  getters: {
    name(state) {
      return state.name;
    },
  },

  mutations: {
    create(state, { displayName: name }) {
      console.log(name);
      state.name = name;
    },

    login(state, { formattedToken: token, displayName: name }) {
      console.log(token, name);
      state.token = token;
    },
  },

  actions: {
    async login({ commit }, { email, password }) {
      const response = await Api.users.login(email, password);

      commit('login', response);
    },

    async create({ commit }, { name, email, password }) {
      const response = await Api.users.create(name, email, password);

      commit('create', response);
    },
  },
};
