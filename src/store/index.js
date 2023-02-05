import { createStore } from 'vuex'

const store = createStore({
  state: {
    token: null,
    locations: null
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setLocations(state,locations){
      state.locations = locations
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('setToken', token);
    },
    setLocations({ commit }, locations) {
      commit('setLocations', locations);
    },
    
  },
  modules: {
  }
})
export default store