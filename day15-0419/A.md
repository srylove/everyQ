### 问题一答案

```javaScript

```


### 问题二答案

```javascript
/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  // your code here
  let res = input.replaceAll('b','')
  while(res.match('ac')){
    res = res.replaceAll('ac','')
  }
  return res
}
```