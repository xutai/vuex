


// Make sure to call Vue.use(Vuex) first if using a module system

/*
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



// let's create a Counter component
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count () {
      return store.state.count
    }
  }
}


const app = new Vue({
  el: '#app',
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
*/


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


const Counter = {
   template: `<div>{{ count }}</div>`,
   computed: {
     count() {
      // return store.state.count
      return this.$store.state.count
     }
   }
}





const app = new Vue({
  el: '#app',
  store,
  // 必须放入这个，this.$store才能使用
  data: {},
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `

})

console.log('this.$store', app.$store)