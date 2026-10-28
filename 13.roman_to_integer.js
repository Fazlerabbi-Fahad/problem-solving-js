var romanToInt = function(s) {
  var converter=new Map();

  converter.set("I",1);
  converter.set("V",5);
  converter.set("X",10);
  converter.set("L",50);
  converter.set("C",100);
  converter.set("D",500);
  converter.set("M",1000);

  let sum=0;

  for(let i=0;i<s.length;i++){
    let curr=converter.get(s[i]);
    let next=converter.get(s[i+1]);
    if(curr<next)
    {
      sum-=curr;
    }else{
      sum+=curr;
    }
  }

  return sum;
};

var result=romanToInt("MCMXCIV");
console.log(result);
