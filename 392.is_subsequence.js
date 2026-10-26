var isSubsequence = function(s, t) {
    let left=0;
    let right=left;
    while(right<t.length)
    {
       if(s[left]==t[right])
       {
          left++;
       }
       right++;
    }
    if(left==s.length)
    {
       return true;
    }
    return false;
};
var result=isSubsequence("","");
console.log(result);
