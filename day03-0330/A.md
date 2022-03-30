### 问题一答案

```javaScript
/**
 * @param {number} maxSize
 */
 var CustomStack = function (maxSize) {
  this.MAX = maxSize
  this.container = []
};

/** 
* @param {number} x
* @return {void}
*/
CustomStack.prototype.push = function (x) {
  if (this.container.length < this.MAX) {
      this.container.push(x)
  }
};

/**
* @return {number}
*/
CustomStack.prototype.pop = function () {
  if (this.container.length) {
      return this.container.pop()
  }
  return -1

};

/** 
* @param {number} k 
* @param {number} val
* @return {void}
*/
CustomStack.prototype.increment = function (k, val) {
  let len = k > this.container.length ? this.container.length : k
  for(let i = 0; i<len;i++){
      this.container[i]+=val
  }
};

/**
* Your CustomStack object will be instantiated and called as such:
* var obj = new CustomStack(maxSize)
* obj.push(x)
* var param_2 = obj.pop()
* obj.increment(k,val)
*/
```


### 问题二答案

```javascript
/*
* @param {Array<any>} promises - notice that input might contains non-promises
* @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
*/
function allSettled(promises) {
 // your code here
 if(promises.length===0) return Promise.resolve([])
 let res = []
 return new Promise(resolve => {
   for(let i = 0;i<promises.length;i++){
     Promise.resolve(promises[i]).then(r=>{
       res[i] = {status: 'fulfilled',value: r}
     }).catch(err=>{
       res[i] = {status: 'rejected', reason: err}
     }).finally(()=>{
       console.log(res.length , promises.length)
       if(res.length === promises.length){
         resolve(res)
       }
     })
   }
   
 })

}
```