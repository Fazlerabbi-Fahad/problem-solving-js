var strStr = function(haystack, needle) {
    let left=0;
    let right=needle.length;;
  
    while(left<haystack.length)
    {
        let value = haystack.slice(left,right);
        if(value==needle)
        {
          return left;
        }
        left++;
        right++;
    }
    return -1;
};
var result=strStr("sadbutsad","sad");
console.log(result);
