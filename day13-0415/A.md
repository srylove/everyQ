### 问题一答案

```javaScript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};
```


### 问题二答案

```javascript




type ProduceFunc = <T extends any[] | {}>(base: T, receipe: (draft: T) => any) => void

const produce: ProduceFunc = (base, recipe) => {
  // your code here
  let draft = JSON.parse(JSON.stringify(base)) || []
  recipe(draft)
  if (Array.isArray(base)) {
    JSON.stringify(draft) === JSON.stringify(base) ? draft = base :
      draft.forEach((e: any, i: number) => {
        if (JSON.stringify(e) === JSON.stringify(base[i])) {
          draft[i] = base[i]
        }
      })
  } else {
    const fn = (v1:any,v2:any)=>{
      let res = v1
      if(JSON.stringify(v1)===JSON.stringify(v2)){
        res = v2
      }else if(typeof v1 !== 'object'){
        res = v1
      }else{
        for (let key in v1){
          res[key] = fn(v1[key],v2[key])
        }
      }
      return res
    }
    draft = fn(draft,base)
  }

  return draft
}


```