// todos

export const getters = {
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
    ]
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.done),
    doneTodosCount: (state, getters) => getters.doneTodos.length,
    getTodosById: (state) => (id) => state.todos.filter(todo => todo.id === id)
  },
  components: {
    Todos: {
      template: `
    <div>
      <p>doneTodos:</p>
      <ul v-for="todos in doneTodos">
        <li>{{ todos}}</li>
      </ul>
      <p>doneTodosCount: {{ doneTodosCount }}</p>
      <p>todosById: {{ todosById }}</p>
    </div>
  `,
      // v1
      computed: {
        doneTodos() {
          // return store.getters.doneTodos
          return this.$store.getters.doneTodos
        },
        doneTodosCount() {
          return this.$store.getters.doneTodosCount
        },
        todosById() {
          return this.$store.getters.getTodosById(2)
        }
      }
      // v2
      // computed: {
      //   ...Vuex.mapState([
      //     'doneTodos',
      //     'doneTodosCount',
      //   ])
      // }
    }
  }
}

