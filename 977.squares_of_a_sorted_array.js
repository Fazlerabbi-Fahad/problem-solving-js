var sortedSquares = function(nums) {
  var arr=new Array(nums.length);
  let left=0;
  let right=nums.length-1;
  let i=nums.length-1;
  
  while(left<=right)
  {
    let sqLeft=nums[left]*nums[left];
    let sqRight=nums[right]*nums[right];

    if(sqLeft>sqRight)
    {
      arr[i]=sqLeft;
      left++;
    }else
    {
      arr[i]=sqRight;
      right--;
    }

    i--;
  }
  return arr;
};

var result = sortedSquares([-4,-1,0,3,10]);
console.log(result);
