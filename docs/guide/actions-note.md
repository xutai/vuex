# actions-note
checkout n. 检验；签出；结账台；检出

context !== store
> check modules

### Dispatching Actions
the shopping cart

### Dispatching Actions in Components
mapActions helper, ...mapActions

this won't work!!
```js
...mapActions({
    dispatchIncrementAsyncPayload: 'incrementAsyncPayload',
    amount: 10
})
```
this is correct
```js
...mapActions({
    dispatchIncrementAsyncPayload: {
        type: 'incrementAsyncPayload',
        amount: 10
    }
}),
```

### Composing Actions
promise, async...await


### question
It's possible for a store.dispatch to trigger multiple action handlers in different modules. In such a case the returned value will be a Promise that resolves when all triggered handlers have been resolved.
> i will check modules later