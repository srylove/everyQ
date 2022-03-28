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

function curry(func) {
  //此处补全
  return function curriedFn(...args) {
    if(args.length === func.length){
      return func(...args);
    }
    return function(){
      return curriedFn(...args.concat(Array.from(arguments)));
    }
  };
}
function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);
alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying
