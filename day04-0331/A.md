### 问题一答案

```javaScript
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    if (s === '') return ''
    let stack = ['']
    let str = ''
    for (let i = 0; i < s.length; i++) {
        console.log(s[i])
        if (/[0-9]/.test(s[i])) {
            if (typeof stack[stack.length - 1] === 'number') {
                stack.push(stack.pop() * 10 + Number(s[i]))
            } else {
                stack.push(Number(s[i]))
            }
        }
        else if (s[i] === '[') {
            stack.push('')
        } else if (s[i] === ']') {
            str = stack.pop().repeat(stack.pop())
            stack.push(stack.pop()+str)
        } else {
            stack.push(stack.pop() + s[i])
        }
    }
    return stack.join('')
};
```


### 问题二答案

```javascript

/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  // your code here
  if(typeof a !== typeof b){
    return false
  }
  if( a.toString() === 'NaN' && b.toString() === 'NaN'){
    return true
  }
  if(typeof a === 'number'){
    return 1/a === 1/b
  }
  return a===b
}
```