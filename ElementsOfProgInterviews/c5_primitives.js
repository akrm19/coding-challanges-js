//---------Samples------//
//Given two integer-valued variables a and b, can you
//swap them without using an additional variable?
const c5_sample1 = () => {
    let a = 5, b = 7;
    console.log(`Original:   a:${a} b:${b}`);
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    console.log(`After bitwise operation:  a:${a} b:${b}`);
};
//c5_sample1();

let testObj = {
    test: 'fsdf',
    something: 'test'
}
let stringObj = JSON.stringify(testObj);
console.log('1');
console.log(stringObj);
console.log('2');
console.log(stringObj.toString());


/*-------------Problem 5_1 - Parity-------------------------
The parity of a sequence of bits is 1 if the number of 1s in 
the sequence is odd; otherwise, it is 0. Parity checks are used 
to detect single bit errors in data storage and communication. 
It is fairly straightforward to write code that computes the 
parity of a single 64-bit nonnegative integer.

Problem5.1: How would yougo about computing the parity of a 
very large number of 64-bit non negative integers?
*/
const c5_1_parity = () =>{

}


/*-------------Problem 5_2 - Compute x/y -------------------------
Problem 5.2: Given two positive integers x and y, how would 
you compute x/y if the only operators you can use are addition, 
subtraction, and shifting?
*/
const c5_2_computerXY = () =>{

}


/*-------------Problem 5_3 - ConvertBase -------------------------
Problem 5.3: Write a function that performs base conversion. 
Specifically, the input is an integer base b1, a string s, 
representing an integer x in base b1, and another integer 
base b2; the output is the string representing the integer x in 
base b2. Assume 2 ≤ b1, b2 ≤ 16. Use “A” to represent 10, 
“B” for 11, ..., and “F” for 15
*/
const c5_3_convertBase = (b1, s, b2) =>{

}



/*-------------Problem 5_4 - Generate Uniform Random Numbers -------------------------
This problem is motivated by the following. Five friends have 
to select a designated driver using a single unbiased coin. 
The process should be fair to everyone.

Problem 5.4: How would you implement a random number generator 
that gener- ates a random integer i in [a, b], given a random 
number generator that produces either zero or one with equal probability? 
All generated values should have equal probability. What is the run 
time of your algorithm?
*/
const c5_4_generateRandNums = (b1, s, b2) =>{

}



/*-------------Problem 5_5 - Open Doors Prob -------------------------
Five hundred closed doors along a corridor are numbered from 1 to 500. 
A person walks through the corridor and opens each door. Another person 
walks through the corridor and closes every alternate door. Continuing 
in this manner, the i-th person comes and toggles the position of 
every i-th door starting from door i.

Problem 5.5: Which doors are open after the 500-th person has walked through?
*/
const c5_5_openDoors = () =>{

}


/*-------------Problem 5_6 - Greatest Common Divisor -------------------------
The greatest common divisor (GCD) of positive integers x and y is the largest 
integer d such that d | x and d | y, where a | b denotes a divides b, i.e., b mod a = 0.

Problem 5.6: Design an efficient algorithm for computing the GCD of two numbers
without using multiplication, division or the modulus operators.
*/
const c5_6_gcd = () =>{

}

