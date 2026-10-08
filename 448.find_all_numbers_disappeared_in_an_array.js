var findDisappearedNumbers = function (nums) {
    var set = new Set(nums);
    var n = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            n.push(i);
        }
    }
    return n;
};

var result= findDisappearedNumbers([4,3,2,7,8,2,3,1]);
console.log(result);
