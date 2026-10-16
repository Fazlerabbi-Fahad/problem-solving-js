var containsNearbyDuplicate = function(nums, k) {
    var seen = new Set();
    for(let i=0;i<nums.length;i++)
    {
        if(seen.has(nums[i]))
        {
            return true;
        }

        seen.add(nums[i])

        if(seen.size>k)
        {
            seen.delete(nums[i-k])
        }
    }
    return false;
};
var result= containsNearbyDuplicate([99,99],2);
console.log(result)

