/**
 * Midpoint --> find the 'middle' node of a Linked List
 * RESTRICTIONS; 
 * DO NOT use size() to find the size of the list
 * DO Not use a counter variable.
 * if the list has even number of list, then take the first half of the list and 
 * return the last node of the first half ot the list. 
 * 
 * Example --
 * const l = new LinkedList();
 * l.insertLast('a');
 * l.insertLast('b')'
 * l.insertLast('c');
 * midpoint(l) ---> returns {data: 'b'}
 */

const list = require('linkedList2.js');

const midPoint = (list) => {
    let slow = list.getFirst();
    let fast = list.getFirst();

    // loop throught the list if the node after fast and another after that is defined
    while(fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

