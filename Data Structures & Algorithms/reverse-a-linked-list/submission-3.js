/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // null  <=   (0) <=        (1) => (2) => (3)
        //                          prev       head / curr   next

        let prev = null
        let curr = head

        while (curr !== null) {
            const next = curr.next
            curr.next = prev 
            prev = curr 
            curr = next 
        }

        return prev
    }
}
