var containsDuplicate = function (nums) {
  const checked = {}
  for (let i = 0; i < nums.length; i++) {
    if (checked[nums[i]] !== undefined) return true
    checked[nums[i]] = true
  }
  return false
}

const result = containsDuplicate([1, 2, 3, 5])
console.log(result)
