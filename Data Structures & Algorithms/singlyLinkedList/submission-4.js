class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // Dummy head node
        this.head = new ListNode(-1);
        this.tail = this.head;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let i = 0;
        let curr = this.head.next;
        while (i < index && curr) {
            curr = curr.next;
            i++;
        }

        if (i === index && curr) {
            return curr.val;
        }
        return -1;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        // Insert a node after the dummy head
        const newHead = new ListNode(val, this.head.next);
        this.head.next = newHead;

        // Update tail if list was previously empty
        if (this.tail === this.head) {
            this.tail = newHead;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newTail = new ListNode(val);
        this.tail.next = newTail; // Append the new node
        this.tail = newTail; // Update the tail pointer
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        let curr = this.head.next, prev = this.head, i = 0;

        // Traverse to the desired index
        while (i < index && curr) {
            i++;
            prev = curr;
            curr = curr.next;
        }

        if (i === index && curr) {
            prev.next = curr.next;

            // Update tail if the removed node was the tail
            if (this.tail === curr) {
                this.tail = prev;
            }

            return true;
        }
        return false;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const res = [];
        let curr = this.head.next;

        while (curr) {
            res.push(curr.val);
            curr = curr.next; // Update pointer to avoid infinite loop
        }

        return res;
    }
}
