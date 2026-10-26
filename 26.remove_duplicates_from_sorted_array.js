var removeDuplicates = function(nums) {
    let k=1;
    for(let i=1;i<nums.length;i++)
    {
        if(nums[i]!=nums[i-1])
        {
            nums[k]=nums[i];
            k++
        }
    }
    return k;
};
var result=removeDuplicates([1,1,2]);
console.log(result);
