var missingNumber = function (nums) {
    var set=new Set(nums);
    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
    return 0;
};

var result= missingNumber([3,0,1]);
console.log(result);
