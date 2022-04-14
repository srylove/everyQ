### 问题一答案

```javaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if(headA == null || headB == null){
        return null
    }
    let pA = headA
    let pB = headB
    while(pA!==pB){
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
    }
    return pA
};
```


### 问题二答案

```javascript
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #container {
        width: 100px;
        height: 100px;
        background-color: #ccc;
        position: absolute;
        border-radius: 5%;
      }
      #container:active {
        box-shadow: 0px 3px 10px 0.1px #000;
        background-color: rgb(20, 201, 141);
        cursor: all-scroll;
      }
    </style>
  </head>
  <body>
    <div id="container"></div>
    <script>
      var dom = document.getElementById("container");
      dom.addEventListener("mousedown", function (e) {
        let x1 = e.clientX - dom.offsetLeft;
        let y1 = e.clientY - dom.offsetTop;
        window.onmousemove = function (e) {
          var x = e.clientX - x1;
          var y = e.clientY - y1;
          dom.style.left = x + "px";
          dom.style.top = y + "px";
        };
        window.onmouseup = function () {
          window.onmousemove = null;
          window.onmousemove = null;
        };
      });
    </script>
  </body>
</html>

```