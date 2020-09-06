

console.log("mocha:", mocha)

mocha.setup('bdd')



console.log("chai:", chai)

const { expect } = chai
console.log("expect:", expect)


const state = {
    const: 10
}

const mutations = {
    inc(state) {
        state.count++
    }
}

const store = new Vuex.Store({
    modules: {
    },
    plugins: [],
    strict: true,
    state,
    mutations,
    getters: {
    },
    actions: {
    }
})

const { inc } = mutations





const vm = new Vue({
    el: '#app',
    template: `
    <div>
        <p>count: {{count}}</p>
        <button @click="inc">inc</button>   
        <div id="mocha"></div>
    </div>
    `,
    computed: {
        count() { return store.state.count }
    },
    methods: {
        inc() {
            store.commit('inc')
        }
    }
})

describe('mutations', () => {
    it('INCREMENT', () => {
        // mock state
        const state = { count : 0}
        // apply mutation
        inc(state)
        // assert result
        expect(state.count).to.equal(1)
    })
})

mocha.run()