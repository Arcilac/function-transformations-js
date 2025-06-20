import { partial } from './partial.js'

function greet(greeting, name, punctuation) {
  return `${greeting} ${name}${punctuation}`
}

const sayHi = partial(greet, 'Hi')
const sayHiToMaria = partial(greet, 'Hi', 'Maria')

console.log(sayHi('Camila', '!')) // Hi Camila!
console.log(sayHiToMaria('.')) // Hi Maria.
