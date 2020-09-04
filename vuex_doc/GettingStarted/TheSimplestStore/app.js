

// Make sure to call Vue.use(Vuex) first if using a module system

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })


  store.commit('increment')

console.log(store.state.count) // -> 1



