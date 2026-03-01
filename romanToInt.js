const romanToInt = function (s) {
  const vals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let result = 0
  for (let i = 0; i < s.length; i++) {
    const current = vals[s[i]]
    const next = vals[s[i + 1]]
    if (current < next) result -= current
    else result += current
  }
  return result
}

console.log(romanToInt('VII'))
