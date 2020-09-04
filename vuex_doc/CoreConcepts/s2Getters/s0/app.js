


// Make sure to call Vue.use(Vuex) first if using a module system

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    getTodosById: (state) => (id) => {
      return state.todos.filter(todo => todo.id === id)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    }
  }
})



// let's create a Counter component
const Counter = {
  template: `<div>{{ count }}</div>`,
  computed: {
    count() {
      return store.state.count
    }
  }
}

const Todos = {
  // 这个模板中，应该有个wrapper，就像下面这个div一样
  template: `
    <div>
      <h2>storeGettersDoneTodos: {{ storeGettersDoneTodos }}</h2>
      <h2>storeStateGettersDoneTodosCount: {{ storeGettersDoneTodosCount }}</h2>
      <h2>todosById: {{ todosById }}</h2>
    </div>
  `,
  computed: {
    storeGettersDoneTodos() {
      //console.log("store.getters", store.getters)
      return store.getters.doneTodos
    },
    storeGettersDoneTodosCount() {
      //console.log('2')
      //return store.getters.doneTodosCount
      return this.$store.getters.doneTodosCount
    },
    todosById() {
     // console.log("this.$store.getters", this.$store.getters)
     console.log("this.$store.getters.getTodosById", this.$store.getters.getTodosById)
      return this.$store.getters.getTodosById(2)
    }
  }
}



const app = new Vue({
  el: '#app',
  store,
  components: { Counter, Todos },
  template: `
    <div class="app">
      <counter></counter>
      <h1>doneTodosCount-local:  {{ doneTodosCount }}</h1>
      <Todos></Todos>
    </div>
  `,
  computed: {
    doneTodosCount() {
      return this.$store.state.todos.filter(todo => todo.done).length
    }
  }
})