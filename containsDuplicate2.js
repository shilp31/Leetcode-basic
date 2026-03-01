var containsDuplicate2 = function (nums, k) {
  const read = {}
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in read) if (Math.abs(i - read[nums[i]]) <= k) return true
    read[nums[i]] = i
  }
  return false
}

const result = containsDuplicate2([1, 0, 1, 1], 0)
console.log(result)
