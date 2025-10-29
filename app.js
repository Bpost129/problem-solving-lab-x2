function printGreeting(name) {
  return `Hello there, ${name}!`
}

console.log(printGreeting('Billy'))


function reverseWordOrder(str) {
  let arr = str.split(' ')
  return arr.reverse().join(' ')
}

console.log(reverseWordOrder("Hey there loser"))


function calculate(num1, num2, operation) {
  switch (operation) {
    case 'add':
      return num1 + num2
    case 'sub':
      return num1 - num2
    case 'mult':
      return num1 * num2
    case 'div':
      return num1 / num2
    case 'exp':
      let total = num1 * num1
      if (num2 > 2) {
        for (let i = 2; i < num2; i++) {
          total *= num1
        }
      }
      return total
    default:
      console.log('Thats not an operation')
  }
}

console.log(calculate(4, 3, 'sub'))
console.log(calculate(4, 3, 'exp'))