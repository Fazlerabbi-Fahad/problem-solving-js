var summaryRanges = function(nums) {
    let arr=[];
    let left=0;
    
    for(let right=0;right<nums.length;right++)
    {
      if(nums[right]+1!=nums[right+1])
      {
        if(left==right)
        {
          arr.push(nums[right].toString());
        }
        else
        {
          let i=nums[left]+'->'+nums[right]
          arr.push(i)
        }
        left=right+1;
      }
    }
    return arr;
};
var result=summaryRanges([0,2,3,4,6,8,9]);
console.log(result);
