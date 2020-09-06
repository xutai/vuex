





const store = new Vuex.Store({
    modules: {

    },
    plugins: [],
    strict: true,
    state: {
        count: 0,
        obj: {
            message: '',
            message2: ''
        }
    },
    mutations: {
        inc (state) {
            state.count++
        },
        updateMessage(state, message) {
            state.obj.message = message 
        },
        updateMessage2(state, message) {
            state.obj.message2 = message 
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
        <p>message: {{ message }}, message2: {{ message2 }}</p>
        <input :value="message" @input="updateMessage">
        <input v-model="message2">
    </div>
    `,
    computed: {
        count() {return store.state.count},
        message: () => store.state.obj.message,
        message2: {
            get() {
                return store.state.obj.message2
            },
            set (value) {
                store.commit('updateMessage2', value)
            }
        }
    },
    methods: {
        inc () {
            store.commit('inc')
        },
        updateMessage(e) {
           store.commit('updateMessage', e.target.value)
        }
    }
})