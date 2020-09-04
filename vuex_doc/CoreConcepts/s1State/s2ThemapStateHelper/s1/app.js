
const store = new Vuex.Store({
  state: {
    count: 0
  }
})

// in full builds helpers are exposed as Vuex.mapState
import { mapState } from 'vuex'

new Vue({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  components: { Counter },
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  template: `
      <div class="app">
        <counter></counter>
      </div>
    `
})