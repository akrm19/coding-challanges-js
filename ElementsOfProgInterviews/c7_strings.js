/*---------Samples------/
A palindromic string is one which reads the same when it 
is reversed. The program below checks whether a string is palindromic
*/
const c7_sample1_isPalimdrome = (input) => {
    let opp = input.length -1;
    for(let i = 0; i < opp; i++ )
    {
        if(input[i] === input[opp]) {
            console.log(`${input[i]}  and ${input[opp]} are equal`);
            opp--;
            continue;
        } else {
            console.log(`Found diff between ${input[i]} and ${input[opp]}. RETURNING FALSE`);
            return false;
    
        }
    }
    console.log('The following is a palindrome');
    console.log(input);
}
//c7_sample1_isPalimdrome('tacoxaocat');




/*-------------Problem 7_1 (Java version of book) - Interconvert strings/integer -------------------------
Problem 7.1: 
A string is a sequence of characters. A string may encode an 
integer, e.g., "123" encodes 123. In this problem, you are to 
implement methods that take a string representing an integer 
and return the corresponding integer, and vice versa. Your code 
should handle negative integers. You cannot use library functions 
like stoi in C++ and parselnt in Java.

Implement string/integer inter-conversion functions.
Hint: Build the result one digit at a time.

Solution:
Begin from the leftmost digit and with each succeed¬ ing digit, 
multiply the partial result by 10 and add that digit. For example, 
to convert "314" to an integer, we initial the partial result r to 0. 
In the first iteration, r = 3, in thesecond iteration r =3xl0 +l =31,
and in the third iteration r =31X10+4 =314, which is the final result.
Negative numbers are handled by recording the sign and negating the result.
*/
// Brute-force
const c7_1_interconvert_v1= (str) =>{
    let offset = str.length -1;
    let currentValue = Number(str[offset]);
    for(let i = 1; i <= offset; i++) {
        let cur = str[offset - i] * (Math.pow(10,i));
        console.log(cur);
        currentValue += cur;
    }
    console.log(currentValue);
}
// Book Solution
const c7_1_interconvert_v2= (str) =>{
    let result = 0;
    for(let i = 0; i < str.length; i++) {
        console.log(`Mutlipliying result ${result} x 10 and adding ${str[i]}`);
        result = (result * 10) + Number(str[i]);
    }
    console.log(result);
    return result;
}
//c7_1_interconvert_v2('314');


/*-------------Problem 7_2 (Java version of book) - Base Conversion -------------------------
Problem 7.2: 
In the decimal number system, the position of a digit is used 
to signify the power of 10 that digit is to be multiplied with. 
For example, "314" denotes the number 3 X 100 + 1 X 10 + 4 X 1. 
The base b number system generalizes the decimal number 
system: the string "ak-\ak-2 ...a\aa", where 0 < a, < b, denotes 
in base-b the integer ......

 Write a program that performs base conversion. The input is a string,
 an integer b1, and another integer b2. The string represents be an 
 integer in base b2. The output should be the string representing the 
 integer in base b2. Assume 2 < b\,b2 < 16. Use "A" to represent 10, 
 "B" for 11, ... , and "F" for 15. (For example, if the string is "615", 
 b1 is 7 and b2 i s13, then the result should be "1A7", since 
 6x7^2 + 1x7 + 5 = 306 = 1x13^2 + 10x13^1 + 7x13^0)
Solution:
*/

const c7_2_baseConverstion_v1 = (arr, b1, b2) => {

}

function convertNumbToGivenBase (num, base) {
    let arrAsNum = [];

    convertNumb(num, base, arrAsNum);
    console.log(arrAsNum);
    return arrAsNum;
};
function convertNumb (num, base, arrAsNum) {
    let nextDigit = num % base;
    console.log(`Num(${num}) % base(${base}) = ${nextDigit}`);
    if(nextDigit > 9) {
        switch(nextDigit){
            case 10:
                nextDigit = 'A';
                break;
            case 11:
                nextDigit = 'B';
                break;
        }
    }
    arrAsNum.unshift(nextDigit);

    let nextNum = Math.floor(num / base); 
    if(nextNum > 0) 
        convertNumb(nextNum, base, arrAsNum);
}
//let t = convertNumbToGivenBase(306, 13);

/*-------------Problem 7_5 (Java version of book) - Test Palindromicity -------------------------
Problem 7.5: 
For the purpose of this problem, define a palindromic string to 
be a string which when all the nonalphanumeric are removed it 
reads the same front to back ignoring case. For example, 
"A man, a plan, a canal, Panama." and "Able was I, ere I saw Elba!" 
are palindromic, but "Ray a Ray" is not.

Implement a function which takes as input a string s and returns 
true if s is a palin¬ dromic string. Hint: Use two indices
Solution:
*/

const c7_5_testPalindromic_v1 = (str) => {
    console.log(`Testing if palindromic: ${str}`);
    let startIndx = 0, endingIndx = str.length -1;
    while(startIndx < endingIndx) {
        let start = str[startIndx];
        let end = str[endingIndx];
        if(!isAlphaNumeric(start)) {
            startIndx++;
            continue;
        } else if(!isAlphaNumeric(end)) {
            endingIndx--;
            continue;
        }
        //console.log(`testing ${start.toLowerCase()} !== ${end.toLowerCase()}`);
        if(start.toLowerCase() !== end.toLowerCase())
            return false;
        else {
            startIndx++;
            endingIndx--;
        }
    }
    return true;
}

isAlphaNumeric = (input) => {
    return input.match(/^[0-9a-zA-Z]+$/);
}
let string1 = 'A man, a plan, a canal, Panama';
let string2 = 'Able was I, ere I saw Elba!';
let string3 = 'Ray a Ray';
//let result = c7_5_testPalindromic_v1(string3);
//console.log(`Result: ${result}`);



/*-------------Problem 7_6 (Java version of book) - Reverse Words -------------------------
Problem 7.6: 
Given a string containing a set of words separated by whitespace, 
we would like to transform it to a string in which the words appear 
in the reverse order. For example, "Alice likes Bob" transforms to 
"Bob likes Alice". We do not need to keep the original string.
Implement a function for reversing the words in a string s.
Hint: It's difficult to solve this with one pass.

Solution:
*/

const c7_6_reverseWords_v1 = (number) => {
    let keypad = {
        0: 0,
        1: 1,
        2: ['A', 'B', 'C'],
        3: ['D','E', 'F'],
        4: ['G', 'H', 'I'],
        5: ['J', 'K', 'L'],
        6: ['M', 'N', 'O'],
        7: ['P', 'Q', 'R', 'S'],
        8: ['T', 'U', 'V'],
        9: ['W', 'X', 'Y', 'Z']
    };
    let mnemonics = [];
    let partialMnc = [number.length];
    getMnemoics(number, 0, mnemonics, partialMnc, keypad);
    console.log(mnemonics);
}

function getMnemoics(number, index, mnemonics, partial, keypad) {
    if(index === number.length) {
        mnemonics.push(partial.toString());
    } else {
        let currentKey = keypad[number[index]]; //0 -9 key
        for(let i = 0; i < currentKey.length; i++) { 
            let letter = currentKey[i]; //current letter for given key
            console.log(letter);
            partial[index] = letter;
            getMnemoics(number, index + 1, mnemonics, partial, keypad);
        }
    }
}
//c7_6_reverseWords_v1('23');


/*-------------Problem 7_13 (Java version of book) - substring search -------------------------
Problem 7.13: 

A good string search algorithm is fundamental to the performance 
of many applica¬ tions. Several clever algorithms have been proposed 
for string search, each with its own trade-offs. As a result, there 
is no single perfect answer. If someone asks you this question in an 
interview, the best way to approach this problem would be to work through 
one good algorithm in detail and discuss at a high level other algorithms.

Given two strings s (the "search string") and t (the "text"), find the 
first occurrence of s in t.  Hint: Form a signature from a string.

Solution:
*/

const c7_13_substringSearch_v1 = (s, text) => {

}

function boyerMooreStringSearch(pattern, text) {
    let index = pattern.length -1;
    while(index < text.length) {
        let textLetter = text[index];
        let patternIndex = pattern.length -1;

        //Depth check of first letter
        if(textLetter === pattern[patternIndex]) {
            //Check remaining lettters
            let matchFound = true;
            for(let i = 1; i < pattern.length; i++) {
                textLetter = text[index - i];
                if(textLetter !== pattern[patternIndex - i]) {
                    matchFound = false;
                    break;
                }
            }
            if(matchFound)
                return index;
            else
                index =+ pattern.length;

        } else {
            //Check how much to advance the index
            let matchFound = false;
            for(let offset = 1; offset <=  patternIndex; offset++) {
                let patternLetter = pattern[patternIndex - offset];
                if(patternLetter === textLetter) {
                    //Move to next possible index
                    matchFound = true;
                    index += offset;
                    break;
                }
            }
            if(!matchFound)
                index += pattern.length;
        }
    }
    return -1;
}

console.log(boyerMooreStringSearch('tex', 'search text string'));