const firstUnique = function (s) {
  const count = {}
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] !== undefined) count[s[i]] += 1
    else count[s[i]] = 1
  }
  for (key in count) {
    if (count[key] === 1) return s.indexOf(key)
  }
  return -1
}

console.log(firstUnique('aabccd'))
