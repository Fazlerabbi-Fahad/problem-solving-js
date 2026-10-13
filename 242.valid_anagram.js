var isAnagram = function(s, t) {
  var map = new Map();
  for(let i=0;i<s.length;i++)
  {
    let number=map.get(s[i])??0;
    map.set(s[i],number+1);
  }
  for(let j=0;j<t.length;j++)
  {
    let number=map.get(t[j])??0;
    map.set(t[j],number-1);
    if(map.get(t[j])==0)
    {
      map.delete(t[j]);
    }
  }
  return map.size==0;
}

var result=isAnagram('rat','car')
console.log(result);
