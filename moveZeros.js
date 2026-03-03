const moveZeros = function (nums) {
  let lastNonZero = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[i], nums[lastNonZero]] = [nums[lastNonZero], nums[i]]
      lastNonZero++
    }
  }
  return nums
}

console.log(moveZeros([0, 1, 0, 3, 12]))
