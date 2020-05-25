import Vue from 'vue'
import Vuex from 'vuex'
import actions from "./actions.js"
import mutations from "./mutations.js"

Vue.use(Vuex)

export default new Vuex.Store({

  getters: {
    WindowsStore: state => state,
  },

  state: {

    WinDialogs:[],

    apps: [
    ]
  },

  modules: {
  },

  mutations,
  actions

});


