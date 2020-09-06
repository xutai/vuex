# getters-note


> getters much like computed property!


property-style access
```js
getters: {
    doneTodosCount: (state, getters) => getters.doneTodos.length
}
store.getters.doneTodosCount
```

method-style access
```js
getters: {
    getTodosById: (state) => (id) => state.todos.find(todo => todo.id === id)
}
store.getters.getTodosById(2)
```


`mapGetter` helper, 
map a getter to a different name

```js
...mapGetters({
    // map 'this.doneCount to 'this.$store.getters.doneTodosCount'
    doneCount: 'doneTodoCount'
})
```