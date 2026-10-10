var threeSum = function(nums) {
  let arr= []

  nums.sort((a,b)=>a-b);
  
  for(let i=0; i<nums.length;i++)
  {
    if(nums[i]==nums[i-1]) continue;

    let left=i+1;
    let right=nums.length-1;

    while(left<right)
    { 
    
      let sum=nums[i]+nums[left];

      if(sum+nums[right]<0)
      {
        left++;
      }
      else if(sum+nums[right]>0)
      {
        right--;
      }
      else{
        arr.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;

        while(left<right && nums[left] === nums[left - 1]){
            left++;
        }
        if(left<right && nums[right] === nums[right + 1])
        {
            right--;
         }
      }
    }
  }
  return arr;
};

var result = threeSum([-2,0,1,1,2]);
console.log(result);
