import * as types from './mutation-types.js'
const { mapState, mapActions } = Vuex
const shop = {
    byProducts(products, handleSuccess, handleFailure) {
        if (
            Math.floor(Math.random() * 10) < 5
        ) {
            handleSuccess()
        } else {
            handleFailure()
        }
    }
}
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                amount: 1000
            })
        }, 1000)
    })
}
export const actions = {
    state: {
        cart: {
            added: ['vue', 'react']
        }
    },
    mutations: {
        CHECKOUT_REQUEST(state, payload) {
            state.cart.added = []
        },
        CHECKOUT_SUCCESS(state) {
            console.info('SUCCESS')
        },
        CHECKOUT_FAILURE(state, payload) {
            console.info('FAILURE')
            state.cart.added = ['vuex']
        }
    },
    actions: {
        increment({ commit }) {
            commit('increment')
        },
        async incrementTriple ({ commit, dispatch }) {
            await dispatch('increment')
            commit('incrementWithPayloadObject',  await getData())
        },
        incrementPlus({ commit, dispatch }) {
            return dispatch('increment').then(() => {
                commit('increment')
            })
        },
        incrementAsyncPayload({ commit }, payload) {
            setTimeout(() => {
                commit('incrementWithPayloadObject', payload)
            }, 1000)
        },
        incrementAsyncObject({ commit }, payload) {
            return new Promise((resolve, rejct) => {
                setTimeout(() => {
                    commit({
                        type: 'incrementObjectStyle',
                        amount: payload.amount
                    })
                    resolve()
                }, 1000)
            })
        },

        checkout({ commit, state }, products) {
            const savedCartItem = [...state.cart.added]
            commit(types.CHECKOUT_REQUEST)
            shop.byProducts(
                products,
                () => commit(types.CHECKOUT_SUCCESS),
                () => commit(types.CHECKOUT_FAILURE)
            )
        }
    },
    components: {
        Cart: {
            computed: {
                ...mapState(['cart'])

            },
            template: `
    <div>
        <h3>actions</h3>
        <button @click="increment">dispatchIncrement</button>
        <button @click="incrementPlus">dispatchincrementPlus</button>
        <button @click="dispatchIncrementAsyncPayload">dispatchIncrementAsyncPayload</button>
        <button @click="dispatchIncrementAsyncObject">dispaatchIncrementAsyncObject</button>
        <button @click="incrementTriple">incrementTriple</button>
        <p>{{ cart.added }}</p>
        <button @click="buyProducts">buyProducts</button>
    </div>`,
            methods: {
                ...mapActions([
                    'increment',
                    'incrementTriple'
                ]),
                ...mapActions({
                    dispatchIncrementAsyncPayload: {
                        type: 'incrementAsyncPayload',
                        amount: 10
                    }
                }),
                incrementPlus() {
                    this.$store.dispatch('incrementPlus')
                    .then(() => {
                        console.dir('discrement plus done!')
                    })
                },
                dispatchIncrementAsyncObject() {
                    this.$store.dispatch({
                        type: 'incrementAsyncObject',
                        amount: 8
                    }).then(() => {
                        console.dir('inc 8!')
                    })
                },
                buyProducts() {
                    this.$store.dispatch({
                        type: 'checkout',
                        payload: this.$store.state.cart.added
                    })
                }
            }
        }
    }
}
