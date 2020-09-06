// v1

const sourceOfTruth = Vue.reactive({
    message: 'Hello'
})

// const appA = Vue.createApp({
//     data() {
//         return sourceOfTruth
//     }
// }).mount('#app-a')

// const appB = Vue.createApp({
//     data() {
//         return sourceOfTruth
//     }
// }).mount('#app-b')

// const appB = Vue.createApp({
//     data() {
//         return sourceOfTruth
//     },
//     mounted() {
//         sourceOfTruth.message = 'Goodbye' // both apps will render 'Goodbye' message now
//     }
// }).mount('#app-b')


// v2

const store = {
    debug: true,

    state: Vue.reactive({
        message: 'Hello!'
    }),

    setMessageAction(newValue) {
        if (this.debug) {
            console.log('setMessageAction triggered with', newValue)
        }

        this.state.message = newValue
    },

    clearMessageAction() {
        if (this.debug) {
            console.log('clearMessageAction triggered')
        }

        this.state.message = ''
    }
}

const appA = Vue.createApp({
    data() {
        return {
            privateState: {},
            sharedState: store.state
        }
    },
    mounted() {
        store.setMessageAction('Goodbye!')
    }
}).mount('#app-a')

const appB = Vue.createApp({
    data() {
        return {
            privateState: {},
            sharedState: store.state
        }
    }
}).mount('#app-b')
