var maxProfit = function(prices) {
  var maxProfit=0;
  var minStock=prices[0];

  for(let i=0;i<prices.length;i++)
  {
    minStock= Math.min(minStock,prices[i])

    let profit=prices[i]-minStock;

    maxProfit= Math.max(maxProfit,profit);
  }
  return maxProfit;
};

var result = maxProfit([7,1,5,3,6,4]);
console.log(result);
