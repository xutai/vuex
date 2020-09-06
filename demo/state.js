// counter
const { mapState } = Vuex
export const state = {
  state: {
    count: 0
  },
  mutations: {
    increment:  state => state.count++,
    decrement(state) {
      state.count--
    }
  },
  template: `<counter></counter>`,
  components: {
    Counter: {
      template: `
      <!--view-->
      <div>
        <p>{{ count }}</p>
        <p>
          <button @click="increment">+</button>
          <button @click="decrement">-</button>
        </p>
      </div>
      
      `,
      // computed: {
      //   count() {
      //     return store.state.count
      //     // return this.$store.state.count
      //   }
      // }
      // computed: mapState({
      //   count: state => state.count
      // })
      computed: {
        ...mapState({
          count: state => state.count
        })
      },
      // actions
      methods: {
        // dispatch
        increment() {
          console.time('increment')
          console.info(this, this.$store, this.store)
          console.timeEnd('increment')
          // v1
          this.$store.commit('increment')
          // v2
          // store.commit('increment')
        },
        decrement() {
          this.$store.commit('decrement')
        }
      },
      mounted() {
        // problematic
        // console.info(this, this.$store, this.store)
      }
    }
  }
}

