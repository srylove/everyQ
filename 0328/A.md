### 问题一答案

```javaScript
/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
    let kArr = []
    let len = num.length
    while (len>0) {
        len--;
        let sum = num[len] + k%10
        k = Math.floor(k/10)
        if(sum>=10){
            kArr.push(sum-10)
            k++
        }else{
            kArr.push(sum)
        }
    }
    while(k>0){
        kArr.push(k%10)
        k=Math.floor(k/10)
    }
    kArr.reverse()

    return kArr
};
```


### 问题二答案

```javascript

```