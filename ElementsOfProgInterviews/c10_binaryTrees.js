const Trees = require('../Common/trees');

/*-------------Problem 10_1 - Is heigth Balanced -------------------------
Problem 10.1: 

*/
const c10_1_isHeightBalanced = (bt) =>{
    let heighestH = 0, lowestH = null;


}

const c10_1_isHeightBalanced_book = (bt) =>{
    let heighestH = 0, lowestH = null;


}

/*-------------Problem 10_2 - Is Symmetric -------------------------
Problem 10.2: 
A binary tree is symmetric if you can draw a vertical line through 
the root and then the left subtree is the mirror image of the right 
subtree. The concept of a symmetric binary tree is illustrated in 
Figure 10.3 on the facing page. 
Write a program that checks whether a binary tree is symmetric. 
Hint: The definition of symmetry is recursive.

Solution:
We can test if a tree is symmetric by computing its mirror image and 
seeing if the mirror image is equal to the original tree. Computing 
the mirror image of a tree is as simple as swapping the left and right 
subtrees, and recursively continuing. The time and space complexity are 
both 0(n), where n is the number of nodes in the tree.
The insight to a better algorithm is that we do not need to construct the 
mirrored subtrees. All that is important is whether a pair of subtrees are 
mirror images. As soon as a pair fails the test, we can short circuit the 
check to false. This is shown in the code below.
*/
const c10_2_isSymmetric = (bt) =>{
    return bt == null || 
}


