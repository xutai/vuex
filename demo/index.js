import { state as counter } from './state.js'
import { getters as todos } from './getters.js'
import { mutations as counterPlus } from './mutations.js'
import { actions as cart } from './actions.js'
// import { modules } from './modules.js'

const { createApp } = Vue
const { createStore } = Vuex

const store = createStore({
    state() {
        return {
            ...counter.state,
            ...todos.state,
            ...counterPlus.state,
            ...cart.state
        }
    },
    mutations: {
        ...counter.mutations,
        ...counterPlus.mutations,
        ...cart.mutations
    },
    getters: {
        ...todos.getters
    },
    actions: {
        ...cart.actions
    }
})


const app = createApp({
    el: '#app',
    // vue2 vuex3
    // store: store,
    components: {
        Counter: counter.components.Counter,
        Todos: todos.components.Todos,
        IncrementCount: counterPlus.components.IncrementCount,
        Cart: cart.components.Cart
    },
    template: `
    <div class="app">
      <Counter></Counter>
      <Todos></Todos>
      <IncrementCount></IncrementCount>
      <Cart />
    </div>
  `
})
// vue3 vuex4
app.use(store)
app.mount('#app')


