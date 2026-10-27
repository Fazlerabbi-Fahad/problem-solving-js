var isIsomorphic = function(s, t) {
    if(s.length!=t.length) return false;
    let sToT = new Map();
    let tToS = new Map();
    
    for(let i=0;i<s.length;i++)
    {
        let a=s[i];
        let b=t[i];
        
        if(!sToT.has(a)) sToT.set(a,b);
        if(!tToS.has(b)) tToS.set(b,a);

        if(sToT.get(a)!=b) return false;
        if(tToS.get(b)!=a) return false;
    }
    return true;
};

var result=isIsomorphic('egg','add');
console.log(result);
