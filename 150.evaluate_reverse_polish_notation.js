var evalRPN = function(tokens) {
    var stack=[];
    for(let i=0;i<tokens.length;i++)
    {
        if(tokens[i]=='+'||tokens[i]=='-'||tokens[i]=="*"||tokens[i]=='/')
        {
            let first=stack.pop();
            let second=stack.pop();
            if(tokens[i]=='+')
            {
                stack.push(first+second);
            }
            if(tokens[i]=='-')
            {
                stack.push(second-first);
            }
            if(tokens[i]=='*')
            {
                stack.push(first*second);
            }
            if(tokens[i]=='/')
            {
                stack.push(Math.trunc(second/first));
            }
        }else{
            stack.push(Number(tokens[i]))
        }
    }
    return stack.pop();
};

var result=evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);
console.log(result);
