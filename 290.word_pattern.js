var wordPattern = function(pattern, s) {
    let pToS=new Map();
    let sToP=new Map();

    let arr=s.split(" ");

    if(arr.length!=pattern.length) return false;
    
    for(let i=0;i<pattern.length;i++)
    {
        if(!pToS.has(pattern[i])) pToS.set(pattern[i],arr[i]); 
        if(!sToP.has(arr[i])) sToP.set(arr[i],pattern[i]);

        let pValue=pToS.get(pattern[i]);
        let sValue=sToP.get(arr[i]);

        if(pValue!=arr[i] || sValue!=pattern[i])
        {
            return false;
        }
    }
    return true;
};

var result=wordPattern("abba","dog cat cat dog");
console.log(result);
