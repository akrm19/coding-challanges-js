const Stack = require('../Common/stack');

/*-------------Problem 9_3 (Java version of book) - Well Formed Strings -------------------------
Problem 9.3: 
A string over the characters "{,},(,),[,]" is said to be well-formed 
if the different types of brackets match in the correct order.
For example, "([]){()}" is well-formed, as is "[()[]{()()}]". 
However, "{)" and "[()[]{()()" are not well-formed,
Write a program that tests if a string made up of the 
characters '(', ')', '[', and"}' is well-formed.
*/
const c9_3_isWellFormed = (str) => {
    if(str.length % 2 !== 0) return false;
    console.log(`Checking if following is  well-formed: ${str}`);
    let opp = new Stack();
    for(let i = 0 ; i < str.length; i++) {
        let c = str[i];
        if(c === '{' || c === '(' || c === '[')
            opp.push(c);
        else if (opp.isEmpty()) {
            return false;
        } else {
            if((c === '}' && (opp.peek() !== '{')) ||
            (c === ')' && (opp.peek() !== '(')) ||
            (c === ']' && (opp.peek() !== '['))) {
                return false;
            }
            opp.pop();
        }
    }
    return opp.isEmpty();
}
let result = c9_3_isWellFormed('[()[]{()()}]');


/*-------------Problem 9_4 (Java version of book) - Normalize Pathnames -------------------------
Problem 9.4: 
Write a program which takes a pathname, and returns the 
shortests equivalent pathname. Assume individual directories
and files have names that use only alphanumeric chars. 
Subdirectory names may be combined using forward slashes the
current directory (.) and parent dorectory (..) .
*/
const c9_4_normalizedPathnames = (str) => {

}

console.log(result);