var topKFrequent = function(nums, k) {
  var map=new Map();
  for(let i=0;i<nums.length;i++)
  {
    let number=map.get(nums[i])??0;
    map.set(nums[i],number+1);
  }

  let sortedMaps=new Map([...map.entries()].sort((a,b)=>b[1]-a[1]))
  return Array.from(sortedMaps.keys()).slice(0,k);
};

var result=topKFrequent([3,0,1,0],1)
console.log(result);
