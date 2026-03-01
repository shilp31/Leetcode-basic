const validAnagram = (s, t) => {
  if (s.length !== t.length) return false
  const count_s = {},
    count_t = {}
  for (let i = 0; i < s.length; i++) {
    count_s[s[i]] = (count_s[s[i]] || 0) + 1
    count_t[t[i]] = (count_t[t[i]] || 0) + 1
  }
  for (key in count_s) {
    if (count_s[key] !== count_t[key]) return false
  }
  return true
}

console.log(validAnagram('aab', 'abb'))
