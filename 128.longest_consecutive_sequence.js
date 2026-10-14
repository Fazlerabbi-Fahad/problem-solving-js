var longestConsecutive = function(nums) {
  if(nums.length==0) return 0;
  var sort=nums.sort((a,b)=>a-b);
  var max=0;
  var count=1;

  for(let i=1;i<sort.length;i++)
  {
    if(sort[i]==sort[i-1])
    {
      continue;
    }

    if(sort[i]==sort[i-1]+1)
    {
      count++;
    }
    else
    {
      max=Math.max(max,count);
      count=1
    }
  }
  return Math.max(max,count);
};

var result=longestConsecutive([0,3,7,2,5,8,4,6,0,1]);
console.log(result);
