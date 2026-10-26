var moveZeroes = function(nums) {
    let left=0;
    let right=0;
    while(right<nums.length)
    {
        if(nums[right]!=0)
        {
            [nums[left],nums[right]]=[nums[right],nums[left]]
            left++
        }  
        right++;
    }
    return nums;
};

var result=moveZeroes([0,1,0,3,12]);
console.log(result);
