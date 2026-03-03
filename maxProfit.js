const maxProfit = function (prices) {
  let [buyIdx, sellIdx, maxProfit] = [0, 1, 0]
  for (; sellIdx < prices.length; sellIdx++) {
    if (prices[sellIdx] > prices[buyIdx]) {
      let profit = prices[sellIdx] - prices[buyIdx]
      maxProfit = maxProfit > profit ? maxProfit : profit
    } else buyIdx = sellIdx
  }
  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
