### 问题一答案

```javaScript
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
    let len = s.length
    let res = []
    let flag = len*2
    for(let i = 0;i<len;i++){
        if(s[i]==c) flag = i
        res.push(Math.abs(flag-i))
    }
    flag = len*2
    for(let i = len-1;i>=0;i--){
        if(s[i]==c) flag = i
        let temp = flag - i
        res[i] = res[i] < temp ? res[i] : temp
    }
    return res
};
```


### 问题二答案

```javascript
function symbolPolyfill(val) {
  if (this instanceof arguments.callee) {
    throw new TypeError("Symbol is not a constructor");
  }
  let description = val === undefined ? undefined : String(val);

  let symbol = Object.create({
    toString: function () {
      return "Symbol(" + this.description + ")";
    },
    
  });

  Object.defineProperty(symbol, "description", {
    value: description,
  });
  return symbol;
}
```