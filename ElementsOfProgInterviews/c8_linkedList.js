const LinkedClasses = require('../Common/linkedList');
const LinkedNode = LinkedClasses.LinkedNode;

/*-------------Problem 8_1 (Java version of book) - Merge Sorted Lists -------------------------
Problem 8.1: 
Consider two singly linked lists in which each node holds a number. 
Assume the lists are sorted, i.e., numbers in the lists appear in 
ascending order within each list. The merge of the two lists is a 
list consisting of the nodes of the two lists in which numbers appear 
in ascending order. Merge is illustrated in Figure 8.3.
Write a program that takes two lists, assumed to be sorted, and returns 
their merge. The only field your program can change in a node is its next field.

Hint: two sorted arrays can be merged using two indices. For lists, take care when 
one iterator reaches the end.
*/

const c8_1_mergeSorted = (ll1, ll2) => {
    let l1 = ll1, l2 = ll2, head = current = null;
    if(l1.value < l2.value) {
        current = l1;
        l1 = l1.next;
    } else {
        current = l2;
        l2 = l2.next;
    }
    head = current;
    while(l1 || l2) {
        if(!l1) {
            current.next = l2;
            break;
        } else if(!l2) {
            current.next = l1;
            break;
        } 

        if(l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    return head;
}

const c8_1_mergeSorted_book = (ll1, ll2) => {
    let l1 = ll1, l2 = ll2, dummyHead = new LinkedNode();
    let current = dummyHead;

    while(l1 && l2) {
        if(l1.value <= l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 ? l1 : l2;
    return dummyHead.next;
}
/*
const ll1 = LinkedNode.fromArray([2,5,7, 20]);
const ll2 = LinkedNode.fromArray([3,11,15]);
let sortedLl = c8_1_mergeSorted(ll1, ll2);
//let sortedLl = c8_1_mergeSorted_book(ll1, ll2);
sortedLl.print();
*/


/*-------------Problem 8_2 (Java version of book) - Reverse Sublist -------------------------
Problem 8.2: 
This problem is concerned with reversing a sublist within a list
Write a program which takes a singly linked list L and two 
integers s and / as arguments, and reverses the order of the nodes 
from the sth node to /th node, inclusive. The numbering begins at 1, 
i.e., the head node is the first node. Do not allocate additional nodes.

Hint: Focus on the successor fields which have to be updated.
*/
const c8_2_reverseSublist = (ll, startI, endI) => {
    let preSublistNode = ll.getNodeAtIndex(startI - 1);
    let sublistStart = preSublistNode.next;
    let sublistEnd = ll.getNodeAtIndex(endI);
    let postSublistNode = sublistEnd.next;
    let tempNode = sublistStart, nodeArray = [];

    while(tempNode && tempNode !== postSublistNode) {
        nodeArray.push(tempNode);
        tempNode = tempNode.next;
    }

    tempNode = nodeArray[nodeArray.length - 1];
    preSublistNode.next = tempNode;
    for(let i = nodeArray.length - 2; i >= 0; i--) {
        tempNode.next = nodeArray[i];
        tempNode = tempNode.next;
    }
    tempNode.next = postSublistNode;
    return ll;
}
const c8_2_reverseSublist_v2 = (ll, startI, endI) => {
    let preSublistNode = ll.getNodeAtIndex(startI - 1);
    let postSublistNode = ll.getNodeAtIndex(endI).next;
    let tempHead = preSublistNode.next, tempTail = tempHead, tempNode = tempHead.next;
    tempHead.next = null;

    while(tempNode !== postSublistNode) {
        console.log(`tempNode ${tempNode.value}`);
        let tempNextNode = tempNode.next;

        tempNode.next = tempHead;
        tempHead = tempNode;

        tempNode = tempNextNode;
    }

    preSublistNode.next = tempHead;
    tempTail.next = postSublistNode;

    return ll;
}

const c8_2_reverseSublist_book = (ll, startI, endI) => {
    if(startI == endI) return ll;

    let dummyHead = new LinkedNode();
    dummyHead.next = ll;
    let sublistHead = dummyHead;
    let i = 1; 
    while(i++ < startI) {
        sublistHead = sublistHead.next;
    }

    let sublistIterator = sublistHead.next;
    while(startI++ < endI) {
        let temp = sublistIterator.next;
        sublistIterator.next = temp.next;
        temp.next = sublistHead.next;
        sublistHead.next = temp;
    }
    return dummyHead.next;
}
/*
let l = LinkedNode.fromArray([11,3,5,7,10,20,9,4,6,1,0]);
l.print();
c8_2_reverseSublist_book(l, 2, 8).print();
*/



/*-------------Problem 8_3 (Java version of book) - Test for Cyclicity -------------------------
Problem 8.3: 
Although a linked list is supposed to be a sequence of nodes 
ending in null, it is possible to create a cycle in a linked 
list by making the next field of an element reference to one 
of the earlier nodes.
Write a program that takes the head of a singly linked list 
and returns null if there does not exist a cycle, and the node 
at the start of the cycle, if a cycle is present. (You do not 
know the length of the list in advance.)
Hint: Consider using two iterators, one fast and one slow.
*/
const c8_3_testCyclicity = (ll) => {
    let slow = runner = ll;
    while(runner && runner.next) {
        if(slow === runner) break;

        slow = slow.next;
        runner = runner.next.next;
    }
    //No cyclicity found
    if(!runner || !runner.next) return null;

    //Move slow to Head. Keep fast at Meeting Point. Each are k steps from the
    //Loop Start. If they move at the same pace, they must meet at Loop Start.
    slow = ll;
    while(slow !== runner) {
        slow = slow.next;
        runner = runner.next;
    }
    //Both now point to the start of the loop
    return runner;
}



/*-------------Problem 8_4 (Java version of book) - Test Overlapping -------------------------
Problem 8.4: 
Given two singly linked lists there may be list nodes that are 
common to both. (This may not be a bug—it may be desirable from 
the perspective of reducing memory footprint, as in the flyweight 
pattern, or maintaining a canonical form.) For example, the lists 
in Figure 8.6 overlap at Node 7.

Write a program that takes two cycle-free singly linked lists, and 
determines if there exists a node that is common to both lists.
*/
const c8_4_overlapingLists = (ll1, ll2) => {
    let {tail: l1Tail, length: l1Length} = LinkedNode.getTailAndLength(ll1);
    let {tail: l2Tail, length: l2Length} = LinkedNode.getTailAndLength(ll2);

    if(l1Tail !== l2Tail) return null;

    let shortest = l1Length > l2Length ? ll2 : ll1;
    let longest = l1Length > l2Length ? ll1 : ll2;
    const offset = Math.abs(l1Length - l2Length);
    if(offset > 0) {
        longest = longest.getNodeAtIndex(offset +1);
    }

    while(shortest !== longest) {
        shortest = shortest.next;
        longest = longest.next;
    }
    return shortest;
}
/*
let l1 = LinkedNode.fromArray([4,9,1]);
let l2 = LinkedNode.fromArray([3,2,8,3,5]);
let l1Tail = l1.getTail();
l1Tail.next = l2.next;
let overlap = c8_4_overlapingLists(l1,l2);
console.log(overlap);
*/