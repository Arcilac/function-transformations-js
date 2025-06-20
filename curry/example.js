import { multiply } from '../utils/multiply.js'
import { curry } from './curry.js'

const curriedMultiply = curry(multiply)

console.log(curriedMultiply(2)(3)(4)) // 24
