

const types = {
    CHECKOUT_REQUEST: 'CHECKOUT_REQUEST'
}


const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        incrementByPayload (state, payload) {
            state.count += payload.amount
        },
        incrementByObject (state, payload) {
            state.count += payload.amount
        }
    },
    actions: {
        /*
        increment (context) {
            context.commit('increment')
        }
        */
       increment ({ commit }) {
           commit('increment')
       },
       incrementAsyncPayload( { commit }, payload ) {
           setTimeout(() => {
               commit('incrementByPayload', payload)
           }, 1000)
       },
       incrementAsyncObject ( { commit }, payload ) {
           setTimeout(() => {
               commit({
                   type: 'incrementByObject',
                   amount: payload.amount
               })
           })
       }
    }
})


const cart = {
    template: `
    <div>
        <h3>cart</h3>
        <p>count: {{ count }}</p>
        <button @click="dispatchIncrement">dispatchIncrement</button>
        <button @click="dispatchIncrementAsyncPayload">dispatchIncrementAsyncPayload</button>
        <button @click="dispatchIncrementAsyncObject">dispaatchIncrementAsyncObject</button>
    </div>`,
    computed: {
        count() { return store.state.count }
    },
    methods: {
        dispatchIncrement() {
            store.dispatch('increment')
        },
        dispatchIncrementAsyncPayload() {
            store.dispatch('incrementAsyncPayload', {
                amount: 10
            })
        },
        dispatchIncrementAsyncObject() {
            store.dispatch({
                type: 'incrementAsyncObject',
                amount: 8
            })
        }
    }
}

new Vue({
    el: '#app',
    template: `
    <div>
        <h1>Shopping Cart</h1>
        <cart />
    </div>
    `,
    components: {
        cart
    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
})