var twoSum = function (nums, target) {
    var map = new Map();
    var n = [];

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            n.push(i);
            n.push(map.get(complement));
        }

        map.set(nums[i], i);
    }
    return n;
};


var result= twoSum([2,7,11,15],9);
console.log(result);
