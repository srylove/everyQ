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

// var s = function(){}
// var _proto = s.prototype;
// var s1 = Object.create(_proto)
// var s2 = Object.create(_proto)
// s1 == s2

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

let a = symbolPolyfill(1);
let b = symbolPolyfill(1);
console.log(a == b);
console.log(a, b, a.toString());
