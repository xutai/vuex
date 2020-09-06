self-contained adj. 独立的；设备齐全的 app
brittle adj. 易碎的，脆弱的；易生气的
singleton 单例模式
granular adj. 颗粒的；粒状的
screencast n. 屏播；截屏视频
boilerplate n. 样板文件；引用

### What is a "State Management Pattern"?
Let's start with a simple Vue counter app:
```js
new Vue({
  // state
  data () {
    return {
      count: 0
    }
  },
  // view
  template: `
    <div>{{ count }}</div>
  `,
  // actions
  methods: {
    increment () {
      this.count++
    }
  }
})
```

It is a self-contained app with the following parts:

- The **state**, the source of truth that drives our app;
- The **view**, a declarative mapping of the **state**;
- The **actions**, the possible ways the state could change in reaction to user inputs from the **view**.

![https://vuex.vuejs.org/flow.png](https://vuex.vuejs.org/flow.png)


- Multiple views may depend on the same piece of state.
- Actions from different views may need to mutate the same piece of state.

For problem one, passing props can be tedious for deeply nested components, and simply doesn't work for sibling components. 

For problem two, we often find ourselves resorting to solutions such as reaching for direct parent/child instance references or trying to mutate and synchronize multiple copies of the state via events. 

Both of these patterns are brittle and quickly lead to unmaintainable code.


![https://vuex.vuejs.org/vuex.png](https://vuex.vuejs.org/vuex.png)
