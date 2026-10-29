var isPalindrome = function(s) {
      let left=0;
      let right=s.length-1;
      while(left<right)
      {
        let l=s[left].toLowerCase();
        let r=s[right].toLowerCase();
    
        if(!/^[a-z0-9]/?.test(l))
        {
            left++;
            continue;
        }
    
        if(!/^[a-z0-9]/.test(r))
        {
            right--;
            continue;
        }
    
        if(l != r)
        {
          return false;
        }
        left++;
        right--;
      }
      return true;
};

var result=isPalindrome("A man, a plan, a canal: Panama");
console.log(result);
