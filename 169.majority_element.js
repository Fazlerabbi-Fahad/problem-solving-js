var majorityElement = function(nums) {
   var count=0;
   var result=0;
   for(let num of nums)
   {
     if(count == 0) result=num;

     if(result==num) count++
      else count--
   }
   return result;
};
var result= majorityElement([2,2,1,1,1,2,2]);
console.log(result)

