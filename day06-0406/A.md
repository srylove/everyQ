### 问题一答案

```javaScript
/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxChunksToSorted = function (arr) {
  const sorted = [...arr];
  sorted.sort((a, b) => a - b);

  let count = 0,
      sum1 = 0,
      sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i];
      sum2 += sorted[i];

      if (sum1 === sum2) {
          count++;
          sum1 = sum2 = 0;
      }
  }

  return count;
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
  const arr = time.split(':')
  const ang = 30
  arr[0] = arr[0] >= 12 ? arr[0]-12 : arr[0]
  let angs = 30*arr[0] + arr[1]/2
  let angm = arr[1]*6
  let res = Math.abs(angs-angm)
  res = res > 180 ? 360 - res : res
  return Math.round(res)
}
```