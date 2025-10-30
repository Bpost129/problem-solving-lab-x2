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


function printConsecutives(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i + 1] + 1) console.log(arr[i], arr[i + 1], arr[i + 2])
  }
}

printConsecutives([1, 2, 3, 9, 8, 0, 44, 45, 46, 2, 9]);
printConsecutives([0, 0, 0, -3, -2, -1, 0, 1, 2, 3]);


function letterReverse(str) {
  let strArr = str.split(' ')
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i].split('').reverse().join('')
  }

  return strArr.join(' ')
}

console.log(letterReverse("Luke I am your father"));
console.log(letterReverse("Aren't you a little short for a storm trooper"));