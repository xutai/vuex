<template>
  <div>
    <p>count: {{ count }}</p>
    <p>countPlusLocalState: {{ countPlusLocalState }}</p>
    <p>localComputed: {{ localComputed }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
import { store } from "../../store";
import { mapState } from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      localCount: 10,
    };
  },
  // v1 without mapState
  //   computed: {
  //     count() {
  //       return store.state.count;
  //       // return this.$store.state.count
  //     },
  //     countAlias() {
  //       return store.state.count;
  //     },
  //     countPlusLocalState() {
  //       return store.state.count + this.localCount;
  //     //   return this.count + this.localCount;
  //     },
  //   },
  // v2 object
  // computed: mapState({
  //     count: state => state.count,
  //     countAlias: 'count',
  //     countPlusLocalState(state) {
  //         return state.count + this.localCount
  //     }
  // }),
  // v3 array'
  //   computed: mapState(["count"]),
  // v4 combile local computed
  //   computed: mapState({
  //     localComputed() {
  //       return 1;
  //     },
  //   }),
  // v5 combile local computed using object spread operator
  computed: {
    localComputed() {
      return 1;
    },
    ...mapState({
      count: (state) => state.count,
      countAlias: "count",
      countPlusLocalState(state) {
        return state.count + this.localCount;
      },
    }),
  },
  methods: {
    // dispatch
    increment() {
      console.time("increment");
      console.info(this, this.$store, this.store);
      console.timeEnd("increment");
      // v1
      this.$store.commit("increment");
      // v2
      // store.commit('increment')
    },
    decrement() {
      store.commit("decrement");
    },
  },
};
</script>

<style>
</style>