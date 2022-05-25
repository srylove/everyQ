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
var middleNode = function (head) {
  slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};





function model(state: {value: string}, element: HTMLInputElement) {
  // your code here
  var val = state.value
  Object.defineProperty(state,'value',{
    "get": function (){
      return val
    },
    "set": function (valNew){
      console.log(999)
      val = valNew
      observe()
    }
  })
  function observe(){
    element.value = val
  }
  element.value = val
  element.addEventListener('change',(e)=>{
    const target = e.target as HTMLInputElement
    state.value = target.value
  })
}

