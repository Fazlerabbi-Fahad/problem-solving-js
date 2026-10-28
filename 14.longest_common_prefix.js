var longestCommonPrefix = function(strs) {
    let i=1;
    let str=strs[0];
    while(i<strs.length)
    {
      for(let j=0;j<str.length;j++)
      {
        if(str[j]!=strs[i][j])
        {
          str=str.slice(0,j);
          break;
        }
      }
      i++;
    }
    return str;
};

var result=longestCommonPrefix(["a", "ab"]);
console.log(result);
