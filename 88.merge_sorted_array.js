var merge = function(nums1, m, nums2, n) {
    let i=m+n-1;
    let mlength=m-1;
    let nlength=n-1;
    while(nlength>=0)
    {
        if(nums1[mlength]>=nums2[nlength])
        {
            nums1[i]=nums1[mlength];
            mlength--;
        }
        else
        {
            nums1[i]=nums2[nlength];
            nlength--;
        }
        
        i--;
    }

    return nums1;
};
var result=merge([1,2,3],3,[2,5,6],3);
console.log(result);
