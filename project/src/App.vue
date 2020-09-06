<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite" />
    <Counter />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import { mapState, createStore } from "vuex";

export default {
  name: "App",
  // computed: mapState({
  //   count: (state) => state.count,
  //   countAlias: "count",
  //   countPlusLocalState(state) {
  //     return state.count + this.localCount;
  //   },
  // }),
  components: {
    // HelloWorld,
    Counter,
  },
};
</script>
