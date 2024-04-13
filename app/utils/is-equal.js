 export function isEqual(value, other) {
  if (value === other) {
    return true
  }
  return false
}

// const result = isEqual(6, 6)
// const expected = false

// if (result !== expected) {
//   throw new Error(`${result} is not equal ${expected}`)
// }

// expect(result).toEqual(expected)

// function expect(result) {
//   return {
//     toEqual(expected) {
//       if(result !== expected) {
//         throw new Error(`${result} is not equal ${expected}`)
//       }
//     }
//   }
// }