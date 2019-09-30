import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {

  },
  plugins: [
    // 状态持久化
    createPersistedState({
      // 修改存储的状态
      storage: window.sessionStorage
    })
  ]
})
