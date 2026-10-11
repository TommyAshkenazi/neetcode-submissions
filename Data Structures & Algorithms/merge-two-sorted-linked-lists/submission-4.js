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
    const dummy = new ListNode(0); // Dummy node for the merged list
    let curr = dummy;

    // Merge the lists until one of them is exhausted
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    // Attach the remaining nodes of the non-empty list
    curr.next = list1 || list2;

    return dummy.next; // Return the head of the merged list
}

}
// list1 = [ 1, 2 , 4 . null], list2 = [ 1 , 3 , 5 , null]
//                       l1
//                                                    l2
// (d) > (1) > (1) > (2) > (3) > (4) > (5)
//                                      c