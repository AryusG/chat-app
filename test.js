let a = [9, 3, 2, 1000]
let b = [2, 3, 9, 10000]

function arrayEquality(a, b) {
  a.sort()
  b.sort()

  return a.every((element, index) => {
    console.log(element, index)
    return element === b[index]
  })
}

console.log(`string text ${a} string text`)