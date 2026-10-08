var smallerNumbersThanCurrent = function (nums) {
    var n = [];
    for (let i = 0; i < nums.length; i++) {
        let count = [...nums].filter(x => x < nums[i]).length;
        n.push(count);
    }
    return n;
};

var result= smallerNumbersThanCurrent([8,1,2,2,3]);
console.log(result);
