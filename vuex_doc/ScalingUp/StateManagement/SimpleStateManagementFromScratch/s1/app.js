


const sourceOfTruth = {}

const vmA = new Vue({
  data: sourceOfTruth
})

const vmB = new Vue({
  data: sourceOfTruth
})


// console.log(vmA, this, vmA.$root, vmA.$root.$data)
console.log(vmA.$root)
console.log(vmA.$root.$data)