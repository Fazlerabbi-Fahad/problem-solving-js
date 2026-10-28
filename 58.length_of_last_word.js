var lengthOfLastWord = function(s) {
  let length=0;
  let i=s.length-1;
  
  while(i>=0)
  {
    if((s[i]==" " || s[i]=="") && length>0)
    {
      break;
    }
    if(s[i]!=" ")
    {
      length++;
    }
    i--;
  }
  return length;
};

var result=lengthOfLastWord(" luffy ");
console.log(result);
