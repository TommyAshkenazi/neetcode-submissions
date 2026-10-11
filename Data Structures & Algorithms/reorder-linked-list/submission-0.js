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
     * @return {void}
     */
    reorderList(head) {
        // find middle of the list
        let slow = head, fast = head.next
        while (fast && fast.next) {
            slow = slow.next
            fast = fast.next.next
        }

        // reverse second porstion of the list
        let second = slow.next
        slow.next = null
        let prev = null
        while(second) {
            let tmp = second.next // hold the pointer
            // point to the oposite direction
            second.next = prev
            prev = second
            second = tmp
        }

        // merge the two portions
        let first = head
        second = prev
        while (first && second) {
            let tmp1 = first.next, tmp2 = second.next
            first.next = second
            second.next = tmp1
            first = tmp1
            second = tmp2
        }

    }
}
