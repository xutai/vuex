// counter plus
import { INCREMENT_WITH_PAYLOAD } from './mutation-types.js'
const { mapState, mapMutations } = Vuex
export const mutations = {
    state: {
        counterStyle: {
            color: 'green',
            background: 'white'
        }
    },
    mutations: {
        ['INCREMENT_WITH_PAYLOAD'](state, n) {
            state.count += n
        },
        incrementWithPayloadObject(state, payload) {
            state.count += payload.amount
        },
        incrementObjectStyle(state, payload) {
            state.count += payload.amount
        }
    },
    components: {
        IncrementCount: {
            computed: mapState(['counterStyle']),
            // computed: {
            //     counterStyle: state => {
            //         console.info(state)
            //         state.counterStyle
            //     }
            // },
            template: `
            <div>
                <div>
                    <h4>Increment Count</h4>
                    <button @click="increment">Increment</button>
                    <button @click="INCREMENT_WITH_PAYLOAD(100)">incrementWithPayload Number</button>
                    <button @click="incrementWithPayloadObject">Increment With Payload Object</button>
                    <button @click="incrementObjectStyle">Increment Object Style</button>
                </div>
                <div>
                <p :style="counterStyle">colorful counter</p>
                <button @click="addPropsToStateObj">addPropsToStateObj</button>
                </div>
            </div>`,
            methods: {
                increment() {
                    this.$store.commit('increment')
                    // store.commit('increment')
                },
                // v1
                // ...mapMutations([
                //     'INCREMENT_WITH_PAYLOAD'
                // ]),
                // or 
                // v2
                ...mapMutations({
                    INCREMENT_WITH_PAYLOAD: 'INCREMENT_WITH_PAYLOAD'
                }),
                incrementWithPayloadObject() {
                    this.$store.commit('incrementWithPayloadObject', {
                        amount: 20
                    })
                },
                incrementObjectStyle() {
                    this.$store.commit({
                        type: 'incrementObjectStyle',
                        amount: 25
                    })
                },
                addPropsToStateObj() {
                    // v1
                    // not working in vue3?
                    // Vue.set(counterStyle, 'fontSize', '3rem')
                    // v2
                    this.$store.state.counterStyle = {
                        ...this.$store.state.counterStyle,
                        fontSize: '2rem'
                    }
                }
            }

        }
    }
}
