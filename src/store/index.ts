import Vue from 'vue'
import Vuex from 'vuex'
import { TOKEN } from "@/utils/keys";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
    isLoggedIn() {
      return localStorage.getItem(TOKEN) != null;
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
