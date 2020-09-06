

const myPlugin = store => {
    console.log('1')
    store.subscribe((mutation, state) => {
        console.log('2')
    })
}




const store = new Vuex.Store({
    modules: {

    },
    plugins: [myPlugin],
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