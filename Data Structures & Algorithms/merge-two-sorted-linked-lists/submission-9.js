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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        const dummy = new ListNode(0)
        let curr = dummy, l1 = list1, l2 = list2

        while (l1 && l2) {
            if (l1.val < l2.val) {
                curr.next = l1
                l1 = l1.next
            } else {
                curr.next = l2
                l2 = l2.next
            }
            curr = curr.next
        }
        curr.next = l1 || l2
        return dummy.next
    }
}
// list1 = [ 1 , 2 , 4 ], list2 = [ 1 , 3 , 5 ]
//                     
//                                          l2
// (d) > (1) > (1) > (2) > (3) > (4) > (5)
//                                      c
