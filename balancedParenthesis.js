/**
 * Write a balancedParenthesis function that takes a string as input and
*returns a boolean — if the parentheses in the input string are ‘balanced’,
*then return true, else return false.
*For example, the program should print true for exp = “[()]{}{[()()]()}” and
*false for exp = “[(])”
* ● Time complexity: O(n) where n is length of string
* ● Space complexity: O(n2) where n is length of string
 * 
 */
const { performance } = require('perf_hooks');


 function balancedParenthesis(input)
{
    const open = '(';
    const closed = ')';
    
    let hasBalancedParenthesis = true;
    if(input.length>=2)
    {
        for (let index = 0; index < input.length-1 && hasBalancedParenthesis == true; index++) {
            const firstElement = input[index];
            const secondElement = input[index+1];
    
            if(open === firstElement)
            {
                hasBalancedParenthesis = closed == secondElement;
            }
        }
    
    }else{
        hasBalancedParenthesis = false;
    } 
    console.log(`Does the parenthesis in the input are balanced? : ${hasBalancedParenthesis ? 'YES' : 'Nope'}`);
    
    return hasBalancedParenthesis;
}







const testcases = [
    '[()]{}{[()()]()}', //true
    '[(])', //false
    '[(])[()]{}{[()()]()}', //false
    '[()]{}{[()()]()}', //true
    '',
    '()',
    '(]',
    '[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}[()]{}{[()()]()}', //true
    '[(])', //false
    '[(])[()]{}{[()()]()}', //false
    '[()]{}{[()()]()}', //true
    '', //false
    '()/',//true
    '(])', //false
];

for (const test of testcases) {
    let start = performance.now();
    balancedParenthesis(test);
    let end = performance.now();    
    
    let timeTaken = end - start; 
    console.log(`Function took  ${timeTaken}  milliseconds`); 
}
