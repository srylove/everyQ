### 问题一答案

```javaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let n = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        n++;
    }

    let add = n - k % n;
    if (add === n) {
        return head;
    }

    cur.next = head;
    while (add) {
        cur = cur.next;
        add--;
    }

    const ret = cur.next;
    cur.next = null;
    return ret;

};
```

### 问题二答案

```javascript
/**
 * @param {string} time
 * @returns {number}
 */
function angle(time) {
  // your code here
  const arr = time.split(":");
  const ang = 30;
  arr[0] = arr[0] >= 12 ? arr[0] - 12 : arr[0];
  let angs = 30 * arr[0] + arr[1] / 2;
  let angm = arr[1] * 6;
  let res = Math.abs(angs - angm);
  res = res > 180 ? 360 - res : res;
  return Math.round(res);
}
```
