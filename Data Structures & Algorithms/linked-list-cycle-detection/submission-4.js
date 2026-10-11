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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head.next || !head.next.next) return false
        let fast = head.next.next, slow = head.next
        while (fast) {
            if (fast === slow) return true
            fast = fast.next.next
            slow = slow.next
        }

        return false
    }
}
// [ 1 , 2 , 3 , 4. , 5 , 6 , 7. , 8]
//               s
//                                     f
