



const myPluginWithSnapshot = store => {
    console.log('1')
    let prevState = _.cloneDeep(store.state)
    console.log("prevState:", prevState)
    console.log('2')
    store.subscribe((mutation, state) => {
        console.log('3')
        console.log(mutation.type, mutation.payload)
        console.log("state:", state)
        let nextState = _.cloneDeep(state)
        console.log('4')
        prevState = nextState
        console.log("prevState:", prevState)
        
    })
}





const store = new Vuex.Store({
    modules: {

    },
    plugins: [myPluginWithSnapshot],
    state: {
        count: 0
    },
    mutations: {
        inc (state) {
            state.count++
        }
    },
    getters: {

    },
    actions: {

    }
})





const vm = new Vue({
    el: '#app',
    template: `
    <div>
        <p>count: {{count}}</p>
        <button @click="inc">inc</button>   
    </div>
    `,
    computed: {
        count() {return store.state.count}
    },
    methods: {
        inc () {
            store.commit('inc')
        }
    }
})