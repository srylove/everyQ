/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  const switNode = (node1, node2, preNode) => {
    node1.next = node2.next;
    node2.next = node1;
    if (preNode) {
      preNode.next = node2;
    }
    if (!node1.next || !node1.next.next) {
      return;
    }

    switNode(node1.next, node1.next.next, node1);
  };
  let res = head && head.next ? head.next : head;
  if (head && head.next) {
    switNode(head, head.next);
  }

  return res;
};


var swapPairs = function(head) {
  if (head === null|| head.next === null) {
      return head;
  }
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
};




/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  // your code here
  if (Object.prototype.toString.call(proto) !== "[object Object]") {
    throw "error";
  }
  const fn = function () {};
  fn.prototype = proto;
  return new fn();
}
