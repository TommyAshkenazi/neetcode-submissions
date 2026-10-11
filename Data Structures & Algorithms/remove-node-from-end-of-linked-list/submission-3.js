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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let curr = head
        let length = 0
        while (curr) {
            length++
            curr = curr.next
        }
        const removeIndex = length - n;
        if (removeIndex === 0) return head.next
        curr = head
        for (let i = 1 ; i < length ; i++) {
            if (i === removeIndex) {
                curr.next = curr.next.next
                break
            }
            curr = curr.next
        }

        return head
    }
}
//              >>>>>>>\
//  null > (1) ^ (2)  (3) > (4)
//           p
//                c