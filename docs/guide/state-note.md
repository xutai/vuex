# state-note

mapState helper

with object spread operator, ...mapState

```js
data(){return { localState: 'ok' }},
computed: {
    localComputed(){return 'blah blah'},
    ...mapState({
        count: state => state.count,
        countAlias: 'count',
        stateCountPlusLocalCount(state) {
            return state.count + this.localCount
        },
    })
}

// or 

computed: mapState(['count'])
```



