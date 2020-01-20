
/*  -----------  A ver Big sum   ------------------
Calculate and print the sum of the elements in an array, 
keeping in mind that some of those integers may be quite large.

Function Description:
Complete the aVeryBigSum function in the editor below. 
It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):
ar: an array of integers .
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format
Print the integer sum of the elements in the array.

Sample Input:
1000000001 1000000002 1000000003 1000000004 1000000005

Output:
5000000015
*/


/*  -----------     ------------------

*/


// Given a string, sort it in decreasing order based on the frequency of characters.
//
// Example 1:
//
// Input:
// "tree"
//
// Output:
// "eert"
//
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
//
// Example 2:
//
// Input:
// "cccaaa"
//
// Output:
// "cccaaa"
//
// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:
//
// Input:
// "Aabb"
//
// Output:
// "bbAa"
//
// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.
//
// class frequency {
//   contructor(l) {
//     this.count = 1;
//     this.letter = l.toLowerCase();
//     this.string = l; 
//   }

//   add = function (l) {
//     this.string += l;
//     this.count++;
//   }
// };

function sort_by_frequency(word){
  // Implement this
  let freqs = [256];
  
  //iterate through array
  //increment hashmap for each letter that we come across
  for(var i = 0; i < word.length; i++)
  {
    let l = word[i];
    if(freqs[l] && freqs[l].letter) {
      freqs[l].value++;
    } else {
      freqs[l] = {
        letter: word[i],
        value: 1
      }; 
    }
  }
  console.log(freqs);
  let x = '';

  freqs = freqs.sort((a, b,) => a.value - b.value);
  console.log(freqs);

  // freqs.sort((a, b,) => a.value - b.value).forEach(el => {
  //   x = x.padEnd(el.value + x.length, el.letter);
  // });

  // for (const key in freqs) {
  //   if (freqs.hasOwnProperty(key)) {
  //     const element = freqs[key];
  //     x = x.padEnd(x.length + element, key);
  //   }
  // }
  console.log(x);
  return x;
}

function sort_by_frequency2(word){
  // Implement this
  let freqs = [];
  
  //iterate through array
  //increment hashmap for each letter that we come across
  for(var i = 0; i < word.length; i++)
  {
    let l = word[i];
    if(freqs[l]) {
      freqs[l]++;
    } else {
      freqs[l] = 1;
    }
  }
  console.log(freqs);
  let x = '';

  freqs = freqs.sort((a, b,) => a.value - b.value);

  for(var i = 0; i < freqs.length; i++)
  {
    if(freqs[i] <= 0)
      break;

      x = x.padEnd(freqs[i] + x.length, String.fromCharCode(i));
  }

  console.log(x);
  return x;
}


console.log(sort_by_frequency2("ttttree") == "eert")
console.log(sort_by_frequency2("cccaaa") == "cccaaa")
console.log(sort_by_frequency2("Aabb") == "bbAa")