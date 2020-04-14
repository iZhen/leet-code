// https://leetcode-cn.com/problems/add-two-numbers-ii/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

function getListNode(arr) {
  let r = null;
  while (arr.length) {
    const n = arr.pop();
    const next = new ListNode(n);
    next.next = r;
    r = next;
  }
  return r;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  const stack1 = [];
  const stack2 = [];

  while (l1) {
    stack1.unshift(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.unshift(l2.val);
    l2 = l2.next;
  }

  let head = null;
  let carry = 0;
  while (stack1.length || stack2.length || carry > 0) {
    const n1 = stack1.shift() || 0;
    const n2 = stack2.shift() || 0;
    let n = n1 + n2 + carry;

    if (n > 9) {
      n -= 10
      carry = 1;
    } else {
      carry = 0;
    }

    const nextHead = new ListNode(n)
    nextHead.next = head
    head = nextHead
  }

  return head;
}

console.log(addTwoNumbers(getListNode([7, 2, 4, 3]), getListNode([5, 6, 4])));
