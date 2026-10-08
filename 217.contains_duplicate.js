var containsDuplicate = function(nums) {
    var set = new Set();

    for(let i=0;i<nums.length;i++)
    {
        if(set.has(nums[i]))
        {
          return true;
        }

        set.add(nums[i],i)
    }

    return false;
};

var result=containsDuplicate([1,2,3,1]);
console.log(result);
