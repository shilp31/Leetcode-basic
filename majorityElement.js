const majorityElement = function (nums) {
  const count = {}
  for (let i = 0; i < nums.length; i++) {
    if (count[nums[i]] !== undefined) count[nums[i]]++
    else count[nums[i]] = 1
  }
  for (key in count) {
    if (count[key] > nums.length / 2) return Number(key)
  }
}

console.log(majorityElement([1, 2, 2, 2, 1]))
