

const moduleA = {
    state() {
        return { countA: 4 }
    },
    mutations: {
        increment(state) {
            state.countA++
        }
    },
    getters: {
        doubleCount(state) {
            return state.countA * 2
        },
        sumWithRootCount(state, getters, rootState) {
            return state.countA + rootState.countRoot
        }
    },
    actions: {
        incrementIfOddOnRootSum({ state, commit, rootState }) {
            if ((state.countA + rootState.countRoot) % 2 === 1) {
                commit('increment')
            }
        }
    }
}



const moduleB = {
    state() {
        return {
            countB: 0
        }
    },
    mutations: {},
    actions: {}
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB,
        foo: {
            namespaced: true,

            state: {
                fooCoin: 10000,
                repositoryCoin: 10
            },
            mutations: {
                someMutation(state) {
                    state.repositoryCoin *= 10
                }

            },
            getters: {
                someGetter(state, getters, rootState, rootGetters) {
                    return getters.someOtherGetter + rootGetters.someOtherGetter
                },
                someOtherGetter: state => { return state.fooCoin * 1 }
            },
            actions: {
                someAction({ dispatch, commit, getters, rootGetters }, payload) {

                    dispatch('someOtherAction', payload)
                    dispatch('someOtherAction', null, { root: true })

                    commit('someMutation')
                    commit('someMutation', null, { root: true })

                },
                someOtherAction(ctx, payload) {
                    console.log('context', ctx, 'payload', payload);
                    ctx.commit('addToTotalCoin', payload, { root: true })
                    ctx.dispatch('anotherAction', payload, { root: true })
                },
                anotherAction: {
                    root: true,
                    handler(namespacedContext, payload) {
                        console.log("namespacedContext", namespacedContext, "payload", payload)
                    }
                }
            }


        }
    },
    state() {
        return {
            countRoot: 1,
            singleDigit: 1,
            tensDigit: 10,
            hundredsDigit: 100,
            thousandDigit: 1000,
            storeCoin: 100,
            totalCoin: 0
        }
    },
    getters: {
        someOtherGetter: state => { return state.hundredsDigit * 3 }
    },
    mutations: {
        someMutation: state => { state.storeCoin *= 10 },
        addToTotalCoin(state, payload) {
            state.totalCoin += payload.amount
        }
    },
    actions: {
        someOtherAction(ctx, payload) { }
    }
})

const moduleC = {
    state() {
        return {
            countB: 0
        }
    },
    mutations: {},
    actions: {}
}
const moduleCC = {
    state() {
        return {
            countB: 0
        }
    },
    mutations: {},
    actions: {}
}

store.registerModule('moduleC', {

})
store.registerModule(['moduleC', 'moduleCC'], {

})


console.log('store.state.a:', store.state.a)
console.log('store.state.b:', store.state.b)


new Vue({
    el: '#app',
    store,
    template: `
    <div>
        <p>countA: {{countA}}; countRoot: {{countRoot}}</p>
        <p>doubleCount: {{doubleCount}}; sumWithRootCount: {{sumWithRootCount}}</p>
        <button @click="incrementIfOddOnRootSum">incrementIfOddOnRootSum</button>
        <p>fooSomeGetter: {{fooSomeGetter}}</p>
        <p>reposioryCoin:  {{repositoryCoin}}; storeCoin: {{storeCoin}}l totalCoin: {{totalCoin}}</p>
        <button @click="dispatchSomeAction">dispatchSomeAction</button>
    </div>
    `,
    computed: {
        countA() { return this.$store.state.a.countA }, //store.state.a.countA
        countRoot() { return store.state.countRoot },
        doubleCount() { return store.getters.doubleCount },
        sumWithRootCount() { return store.getters.sumWithRootCount },
        fooSomeGetter() { return store.getters['foo/someGetter'] },
        repositoryCoin() { return store.state.foo.repositoryCoin },
        storeCoin() { return store.state.storeCoin },
        totalCoin() { return store.state.totalCoin }
    },
    methods: {
        incrementIfOddOnRootSum() {
            store.dispatch('incrementIfOddOnRootSum')
        },
        dispatchSomeAction() {
            store.dispatch('foo/someAction', {
                amount: 10
            });
        }
    }
})


