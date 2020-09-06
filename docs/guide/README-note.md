# Getting Started note



There are two things that make a Vuex store different from a plain global object:

1. Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store's state changes.
2. You cannot directly mutate the store's state. The only way to change a store's state is by explicitly **committing mutations**. This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.

> much like "modue design pattern"
>
> dispatching actions - public method
>
> committing mutations - private method
>
> state  - private property



vue2 vuex3

```js
new Vue{ store: store }
new Vuex.Store({})
```



vue 3 vuex4

```js
Vuex.createStore({
    state(){
        return { 
            count: 0
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
})
Vue.createApp(
    computed(){
	    return store.state.count
    },
    methods: {
        // v1
        this.$store.commit('increment')
        // v2
        store.commit('increment')
    }
)
app.use(store)
```

in browser console
```
this works:
store.commit('increment')
store.state.count

this won't work:
app.$store 
```

### question and answer


this "state" must be handled by Vuex,
you don't need to pass it yourself,
as you cannot access "state" via "this.state",
```

mutation: {
    increment(state){}
}
```
