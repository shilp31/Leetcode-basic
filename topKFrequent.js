const topKFrequent = function (nums, k) {
  const count = {}
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]] = (count[nums[i]] || 0) + 1
  }
  const sortedCount = Object.keys(count).sort((a, b) => count[b] - count[a])
  return sortedCount.slice(0, k).map(Number)
}

console.log(topKFrequent([1, 2, 1, 1, 3, 2], 1))
