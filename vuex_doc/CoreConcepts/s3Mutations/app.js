

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters: {

    },
    mutations: {
        increment(state) {
            state.count++
        },
        incrementWithPayload (state, n) {
            state.count += n
        },
        incrementWithPayloadObject (state, payload) {
            state.count += payload.amount
        },
        incrementObjectStyle (state, payload) {
            state.count += payload.amount
        }
    }
})


const IncrementCount = {
    template: `
    <div>
        <h4>Increment Count</h4>
        <button @click="increment">Increment</button>
        <button @click="incrementWithPayload">Increment With Payload</button>
        <button @click="incrementWithPayloadObject">Increment With Payload Object</button>
        <button @click="incrementObjectStyle">Increment Object Style</button>
    </div>`,
    methods: {
        increment () {
            // this.$store.commit('increment')
            store.commit('increment')
        },
        incrementWithPayload () {
            store.commit('incrementWithPayload', 10)
        },
        incrementWithPayloadObject () {
            store.commit('incrementWithPayloadObject', {
                amount: 20
            })
        },
        incrementObjectStyle () {
            store.commit({
                type: 'incrementObjectStyle',
                amount: 25
            })
        }
    }

}


new Vue({
    el: '#app',
    store,
    template: `
        <div>
        <h4>count； {{ count }}</h4>
            <IncrementCount></IncrementCount>
        </div>
    `,
    components: { IncrementCount },
    data() { },
    computed: {
        count() { return store.state.count }
    }
})