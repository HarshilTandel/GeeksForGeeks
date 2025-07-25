/**
 * @param {Node} head
 * @returns {Node}
 */

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    reverseList(head) {
        // your code here
        let prev = null;
        let curr = head;
        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
    
}