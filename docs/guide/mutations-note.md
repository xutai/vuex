# Mutations-note
payload 负载
subject to 使服从；使遭受；受…管制
caveat n. 警告；
upfront adj. 预付的；在前面的；正直的，坦率的
synchronicity n. 同步性，同时发生

> much like event
```js
mutationName(state){}

string type: mutationName
handler: (state){}
```

- Commit with Payload
- Object-Style Commit


### Mutations Follow Vue's Reactivity Rules
```js
this.$store.state.counterStyle = {
    ...this.$store.state.counterStyle,
    fontSize: '2rem'
}
```


### Using Constants for Mutation Types
operators - object_initializer - computed property names
```js
[SOME_MUTATION](state){}
[SOME_MUTATION]: function(state){}
```

### Mutations Must Be Synchronous
mutation handler functions must be synchronous
```js
mutations: {
    someMutation(state) {
        api.callAsyncMethod(() => {
            state.count++
        })
    }
}


```
For every mutation logged, the devtool will need to capture a "before" and "after" snapshots of the state. 
> "before" at calling the mutation handler **(state){}**,
> "after" at calling **api.callAsyncMethod()**,
> won't be waiting for **() => {}**


### Committing Mutations in Components
```js
...mapMutations(['name'])
...mapMutations({
    methodName1: mutationType1,
    methodName2: mutationType2
})
```


### On to Actions
2 callbacks when and which was called first to mutate state? so mutations are synchronous transactions. 
