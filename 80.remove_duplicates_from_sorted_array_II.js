var removeDuplicates = function(nums) {
    // let map=new Map()
    // let k=0;
    // for(let i=0;i<nums.length;i++)
    // {
    //     let value=map.get(nums[i]) ?? 0;
    //     map.set(nums[i],value+1);
        
    //     if(value<2)
    //     {
    //         nums[k]=nums[i];
    //         k++
    //     }
    // }
    // return k;

    let k=0;
    for(let i=0;i<nums.length;i++)
    {
        if(k<2||nums[i]!=nums[k-2])
        {
            nums[k]=nums[i];
            k++
        }
    }
    return k;
};

var result=removeDuplicates([1,1,1,2,2,3]);
console.log(result);
