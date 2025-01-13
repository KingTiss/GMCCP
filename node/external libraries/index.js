const _ = require("lodash")

const listOfNotes=[13,24,56,899,457]
const clearList = _.without(listOfNotes,899)
console.log(clearList);