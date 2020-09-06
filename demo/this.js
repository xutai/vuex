// this points to where?

const obj = {
    state() {
        return 1
    },
    mutation: {
        state: 2,
        getState(state) {
            console.info(state)
        },
        // cannot use "this" in method argument, reserved word?
        // getState2(this.state) {}
        getState2() {
            console.info("this.state", this.state)
            // this refers to "mutation" obj
        }
    }
}
obj.mutation.getState2()
