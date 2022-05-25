var MyQueue = function () {
  this.quene = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.quene.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.quene.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.quene[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.quene.length ? false : true;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

/**
 * @param {string} time
 * @returns {number}
 */
function angle(time) {
  // your code here
  const arr = time.split(":");
  const ang = 30;
  arr[0] = arr[0] >= 12 ? arr[0] - 12 : arr[0];
  let angs = 30 * arr[0] + arr[1] / 2;
  let angm = arr[1] * 6;
  let res = Math.abs(angs - angm);
  res = res > 180 ? 360 - res : res;
  return Math.round(res);
}
