
var isValid = function(s) {
    var stack=[];
    var useMap=new Map();

    useMap.set(")","(");  
    useMap.set("}","{");
    useMap.set("]","[");

    for(let i=0;i<s.length;i++)
    {
        if(stack.length>0&&stack.at(-1)==useMap.get(s[i]))
      {
        stack.pop()
      }else
      {
        stack.push(s[i])
      }
    }
  return !stack.length>0;
};

var result= isValid("(]")
console.log(result)
