var twoSum = function (nums, target) {
  const checked = {}
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i]
    const balance = target - current
    if (checked[balance] !== undefined) {
      return [checked[balance], i]
    }
    checked[current] = i
  }
}

const result = twoSum([20, 70, 3, 6], 9)
console.log(result)
