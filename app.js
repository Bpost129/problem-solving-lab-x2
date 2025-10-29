function printGreeting(name) {
  return `Hello there, ${name}!`
}

console.log(printGreeting('Billy'))


function reverseWordOrder(str) {
  let arr = str.split(' ')
  return arr.reverse().join(' ')
}

console.log(reverseWordOrder("Hey there loser"))