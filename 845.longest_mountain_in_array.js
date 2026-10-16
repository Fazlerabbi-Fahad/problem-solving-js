var longestMountain = function(arr) {
    let max=0;
    for(let i=1;i<arr.length;i++)
    {
        if(arr[i-1]<arr[i] && arr[i]>arr[i+1])
        {
            let left=i;
            let right=i;
            while(left>0&& arr[left]>arr[left-1])
            {
                left--;
            }
            while(right<arr.length&&arr[right]>arr[right+1])
            {
                right++;
            }
            max=Math.max(max,right-left+1);
        }
    }
    return max;
};
var result= longestMountain([2,1,4,7,3,2,5]);
console.log(result)

