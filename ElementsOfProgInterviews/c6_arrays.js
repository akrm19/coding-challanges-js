/*---------Samples------/
Your input is an array of integers, and you have to 
reorder its entries so that the even entries appear first.
*/
const c6_sample1_v1 = (array) => {
    let evenStart = unsorted = 0, oddStart = array.length -1;
    console.log(`even: ${evenStart}  unsorted: ${unsorted} odd: ${oddStart}`);
    while(unsorted < oddStart) {
        if(array[unsorted] % 2 === 0) { //is even
            swapArraySpots(array, unsorted++, evenStart++);
        } else //is odd
            swapArraySpots(array, unsorted, oddStart--);
    }
    console.log(array);
}

const c6_sample1_v2 = (array) => {
    let nextEven = 0, nextOdd = array.length - 1;
    while(nextEven < nextOdd) {
        if(array[nextEven] % 2 === 0) 
            nextEven++;
        else
            swapArraySpots(array, nextEven, nextOdd--);
    }
    console.log(array);
}
//c6_sample1_v2([4,1,3,9,10,13,20,51, 4, 1, 13,26, 0]);

/*   UTILS   */
function swapArraySpots (arr, spot1, spot2) {
    const temp = arr[spot1];
    arr[spot1] = arr[spot2];
    arr[spot2] = temp;
}


/*-------------Problem 6_1 - ArraySort -------------------------
Problem 6.1: 
Write a function that takes an array A of 
length n and an index i into A, and re-arranges the elements 
such that all elements less than A[i] appear first, followed 
by elements equal to A[i], followed by elements greater 
than A[i]. Your algorithm should have O(1) space complexity 
and O(n) time complexity

Solution:
This problem is conceptually straightforward: maintain four 
groups, bottom (elements less than pivot), middle (elements 
equal to pivot), unclassified, and top (elements greater than 
pivot). These groups are stored in contiguous order in A. To 
make this partitioning run in O(1) space, we use smaller, equal, 
and larger pointers to track these groups in the following way:

− bottom: stored in subarray A[0 : smaller − 1].
− middle: stored in subarray A[smaller : equal − 1]. 
− unclassified: stored in subarray A[equal : larger]. 
− top: stored in subarray A[larger + 1 : n − 1].

We explore elements of unclassified in order, and classify the 
element into one of bottom, middle, and top groups according to 
the relative order between the incoming unclassified element and 
pivot. Each iteration decreases the size of unclassified group 
by 1, and the time spent within each iteration is O(1), implying 
the time complexity is O(n).

Keep the following invariants during partitioning: 
* bottom group: (*A)[0 : smaller - 1].
* middle group: (*A)[smaller : equal - 1].
* unclassified group: (*A)[equal : larger].
* top group: (*A)[larger + 1 : A->size() - 1].
*/

const c6_1_arraySort_v1 = (pivot, array) => {
    let smallerThanP, equal = 0, larger = array.length - 1;
    while(equal < larger) {
        if(array[equal] < pivot) {
            Utils.swapArraySpots(array, equal, smallerThanP);
            equal++;
            smallerThanP++;
        } else if (array[equal] === pivot) {
            ++equal;
        } else { // if array[equal] > pivot
            Utils.swapArraySpots(array, equal, larger--)
        }
    }
}

const c6_1_arraySort_book = (pivot_index, A) => { 
    var pivot = (A)[pivot_index];
    // When there is any unclassified element.
    var smaller = 0, equal = 0, larger = A => size() - 1;
    while (equal <= larger) {
        // (*A)[equal] is the incoming unclassified element.
        if ((A)[equal] < pivot) { 
            swap((A)[smaller++], (A)[equal++]);
        } else if ((A)[equal] == pivot) { 
            ++equal;
        } else { // (*A)[equal] > pivot. 
            swap((A)[equal], (A)[larger--]);
        } 
    }
}


/*-------------Problem 6_2 - Max Difference -------------------------
Problem 6.2: 
A robot needs to travel along a path that includes several ascents 
and descents. When it goes up, it uses its battery to power the 
motor and when it descends, it recovers the energy which is stored 
in the battery. The battery recharging process is ideal: on descending, 
every Joule of gravitational potential energy converts to a Joule of 
electrical energy which is stored in the battery. The battery has a 
limited capacity and once it reaches this capacity, the energy generated 
in descending is lost.

Design an algorithm that takes a sequence of n three-dimensional 
coordinates to be traversed, and returns the minimum battery 
capacity needed to complete the journey. The robot begins with a 
fully charged battery.


Solution:
Suppose the three-dimensions correspond to x, y, and z, 
with z being the vertical dimension. Since energy usage 
depends on the change in height of the robot, we can ignore 
the x and y coordinates. Suppose the points where the robot 
goes in successive order have z coordinates z0 , . . . , zn−1 . 

Assume that the battery capacity is such that with the fully 
charged battery, the robot can climb B meters
The robot will run out of energy if there exist integers i 
and j such that i < j and zj−zi >B,i.e.,to go from Point i to 
Point j,the robot has to climb more than B meters. Therefore, 
we would like to pick B such that for any i< j, we have B ≥ zj−zi.
*/
const c6_2_macDiff = () =>{

}

/*-------------Problem 6_2 (Java version of book) - Incremenet Integer -------------------------
Problem 6.2: 
Write a program which takes as input an array of digits encoding a 
decimal number D and updates the array to represent the number D + 1. 
For example, if the input is (1,2,9) then you should update the array 
to (1,3,0). Your algorithm should work even if it is implemented in 
a language that has finite-precision arithmetic.

Solution:

*/
// THis would not work for a lang that limits the range of values for a number
const c6_2_incremeentInt_v1= (arr, incremenet) =>{
    let numberAsString = '';
    arr.forEach(digit => { numberAsString += digit.toString();});
    let result = (Number.parseFloat(numberAsString) + 1).toString();
    console.log(Array.from(result));
    //console.log(...result);
}
//c6_2_incremeentInt_v1([1,2,9], 1);

const c6_2_incremeentInt_v2= (arr, incremenet) =>{
    let currDigit = arr.length -1; //start w/least significant
    arr[currDigit] += 1;

    for(let i = currDigit; i > 0; i--) {
        if(arr[i] === 10) { 
            //set to 0 and carry over 1 to next digit
            arr[i] = 0;
            arr[i-1] += 1;
        }
    }

    if(arr[0] === 10) {
        arr[0] = 0;
        arr.unshift(1);
    }
    console.log(arr);
}
//c6_2_incremeentInt_v2([1,2,9], 1);

/*-------------Problem 6_3 - (Java Version of book) Multiply by 2 arbitrary-precision ints -------------------------
Problem 6.3: 
Certain applications require arbitrary precision arithmetic. 
One way to achieve this is to use arrays to represent integers, e.g., 
with one digit per array entry, with the most significant digit 
appearing first, and a negative leading digit denoting a negative
integer. For example,(1,9,3,7,0,7,7,2,1) represents 193707721 and 
(-7,6,1,8,3,8,2,5,7,2,8,7) represents-761838257287.

Write a program that takes two arrays representing integers, and 
returns an integer representing their product. For example, since 
193707721 X -761838257287 = -147573952589676412927, if the inputs are
*/
const c6_3_multiplyArbitrary = (arr1, arr2) =>{
    const num1 = Number(arr1.join(''));
    const numb2 = Number(arr2.join(''));
    const result = num1 * numb2;//).toString();
    console.log(`Result: ${result}`);

    // let product = [];
    // for(let mIndex = arr2.length - 1; mIndex >= 0 ; mIndex--) {
    //     let multiplier = arr2[mIndex];
    //     let multiplerProduct = [];
    //     for(let multiplicantI = arr1.length -1; multiplicantI >= 0; multiplicantI--) {
    //         let tempP = multiplier * arr1[multiplicantI];
    //         if(tempP < 10)
    //             multiplerProduct.unshift(tempP);
    //         else {
    //             multiplerProduct.unshift(tempP % 10);

    //         }
    //     }
    // }

}
c6_3_multiplyArbitrary([1,9,3,7,0,7,7,2,1], [-7,6,1,8,3,8,2,5,7,2,8,7]);
console.log(`Expected Result: -147573952589676412927`);
    
/*-------------Problem 6_3 - Generalizaitons of Max diff  -------------------------
Problem 6.3: 
Problem 6.2, which is concerned with computing 
max 0≤i<j≤n−1 (A[ j] − A[i]), generalizes
naturally to the following three problems.
For each of the following, A is an integer array oflength n.

(1.) Compute the maximum value of (A[j0] − A[i0]) + (A[j1] − A[i1]), 
subject to i0 < j0 < i1 < j1.
(2.) Compute the maximum value of 􏰈k−1(A[j ]−A[i ]), subject 
to i < j < i < j <t=0tt 0011 · · · < ik−1 < jk−1. Here k is a fixed 
input parameter.
(3.) Repeat Problem (2.) when k can be chosen to be any value from 0 to ⌊n/2⌋.
*/
const c6_3_maxDiffGeneralizations = () =>{

}


/*-------------Problem 6_4 - (Java Book prob) Advance Through an array -------------------------
Problem 6.4: 
In a particular board game, a player has to try to advance 
through a sequence of positions. Each position has a nonnegative 
integer associated with it, representing the maximum you can 
advance from that position in one move. You begin at the first 
position,and win by getting to the last position. For example,
let A =(3,3,1,0,2,0,1} represent the board game, i.e., the ith 
entry in A is the maximum we can advance from i. Then the game 
can be won by the following sequence of advances through A: take 
1 step from A[0] to A[1], then 3 steps from A[l] to A[4], then 2 
steps from A[4] to A[6], which is the last position. Note 
that A[0] = 3 > 1, A[l] = 3 > 3, and A[4] = 2 > 2, so all moves 
are valid. If A instead was (3, 2, 0,0, 2, 0,1), it would not 
possible to advance past position 3, so the game cannot be won.

Solution:

*/
const c6_4_advanceThroughArray = (A) =>{
    let furthestReachedIndex = 0, lastIndex = A.length -1;
    for(let i = 0; i <= furthestReachedIndex && furthestReachedIndex < lastIndex; i++) {
        furthestReachedIndex = Math.max(furthestReachedIndex, A[i] + i);
    }
    return furthestReachedIndex >= lastIndex;
}
const a = [3,3,1,0,2,0,1]; //can win
const aResult = c6_4_advanceThroughArray(a);
console.log(`Result: ${aResult}. Expected True`);

const b = [3, 2, 0,0, 2, 0,1]; //cannot win
const bResult = c6_4_advanceThroughArray(b);
console.log(`Result: ${bResult}. Expected False`);




/*-------------Problem 6_4 -  Sample Offline data -------------------------
Problem 6.4: 
Let A be an array of n distinct elements. Design an algorithm 
that returns a subset of k elements of A. All subsets should 
be equally likely. Use as few calls to the random number 
generator as possible and use O(1) additional storage. You can 
return the result in the same array as input.

Solution:

*/
const c6_4_offlineData = () =>{

}


/*-------------Problem 6_5 -  Sample Online data -------------------------
Problem 6.5: 
This problem is motivated by the design of a packet sniffer 
that provides a uniform sample of packets for a network session.

Design an algorithm that reads a sequence of packets and maintains
a uniform random subset of size k of the read packets when the 
n ≥ k-th packet is read.

Solution:

*/
const c6_5_onlineData = () =>{

}

/*-------------Problem 6_5 - (Java Book) Delete Dups  -------------------------
Problem 6.5: 
This problem is concerned with deleting repeated elements from a 
sorted array. For example, for the array (2,3,5,5,7,11,11,11,13), 
then after deletion, the array is (2,3,5,7,11,13,0,0,0). After 
deleting repeated elements, there are 6 valid entries. There are 
no requirements as to the values stored beyond the last valid element.

Write a program which takes as input a sorted array and updates it so 
that all duplicates have been removed and the remaining elements have 
been shifted left to fill the emptied indices. Return the number of valid 
elements. Many languages have library functions for performing this 
operation, you cannot use these functions.

Solution:

*/
const c6_5_deleteDups = (arr) =>{
    console.log(`Before: ${arr}`);
    let currentIndex = 0, dupIndex = arr.length -1;
    while(currentIndex < dupIndex) {
        let nextval = arr[currentIndex + 1];
        if(arr[currentIndex] === nextval) {
            arr[currentIndex] = 0;
            //swapArraySpots(arr, currentIndex, dupIndex--);
        } else {
            currentIndex++;
        }
    }
    console.log(`After: ${arr}`);
    let numberOfValidNums = (arr.length -1) - dupIndex;
    console.log(`Number of valid numbers: ${numberOfValidNums}`);
}

const c6_5_deleteDups_v2 = (arr) =>{
    console.log(`Before: ${arr}`);
    let writeIndex = 1;
    for(let i = 1; i < arr.length; ++i) {
        if(arr[writeIndex -1] !== arr[i]) //not dup
            arr[writeIndex++] = arr[i]; //Move write index onw
    }
    console.log(`After: ${arr}`);
    console.log(`Number of valid numbers: ${writeIndex}`);
}

const c6_5_deleteDups_v3 = (arr) => {
    console.log(`Before: ${arr}`);
    let currentIndex = 1, dupStartingIndex = 1;
    for(;currentIndex < arr.length; currentIndex++) {
        let prev = arr[currentIndex -1];
        if(prev !== arr[currentIndex]) {
            console.log(`Not dup: ${prev} !== ${arr[currentIndex]}`);
            console.log(`index is ${currentIndex} and dupStartingIndex is ${dupStartingIndex}. Both will increased by 1`);
            arr[dupStartingIndex] = arr[currentIndex];
            dupStartingIndex++;
        }  else {
            console.log(`Found DUP! at index ${currentIndex} and dupStartingIndex ${dupStartingIndex}`);
        }
    }
    console.log(`After: ${arr}`);
}
c6_5_deleteDups_v3([2,3,5,5,5,5,5,7,7,11,11,11,13]);

/*
async function testFunc() {
    try {
        const url = 'https://gjueix9xa7.execute-api.us-east-2.amazonaws.com/prod/param-test-with-cors?name=TestParam';
        const data = await postData(url, { answer: 42 });
        console.log(JSON.stringify(data)); // JSON-string from `response.json()` call
    } catch (error) {
        console.error(error);
    }
}

testFunc();
  
async function postData(url = '', data = {}) {
// Default options are marked with *
const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
    'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
});
return await response.json(); // parses JSON response into native JavaScript objects
}

*/
