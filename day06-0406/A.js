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




class MyURLSearchParams {
  /**
   * @params {string} init
   */
  constructor(init) {
    this.initObj = {}
    init.split('&').map(item => {
      let [key,value] = item.split('=')
      if(typeof this.initObj[key] === 'string') {
        this.initObj[key] = [this.initObj[key],value]
      } else if(typeof this.initObj[key] === 'array'){
        this.initObj[key] = [...this.initObj[key],value]
      }else{
        this.initObj[key] = value
      }
      
    })
  }
  
  /** 
   * @params {string} name
   * @params {any} value
   */
  append(name, value) {
    if(typeof this.initObj[name] === 'string') {
        this.initObj[name] = [this.initObj[name],value]
      } else if(typeof this.initObj[name] === 'array'){
        this.initObj[name] = [...this.initObj[name],value]
      }else{
        this.initObj[name] = value
      }
  }
  
  /**
   * @params {string} name
   */
  delete(name) {
    delete this.initObj[name]
  }
  
  /**
   * @returns {Iterator} 
   */
  entries() {
    return Object.entries(this.initObj)
  }
  
  /**
   * @param {(value, key) => void} callback
   */
  forEach(callback) {
    for (let it in this.initObj){
      callback(this.initObj[it])
    }
  }
  
  /**
   * @param {string} name
   * returns the first value of the name
   */
  get(name) {
    return typeof this.initObj[name] === 'array' ? this.initObj[name][0] : this.initObj[name]
  }
  
  /**
   * @param {string} name
   * @return {string[]}
   * returns the value list of the name
   */
  getAll(name) {
    return this.initObj[name]
  }
  
  /**
   * @params {string} name
   * @return {boolean}
   */
  has(name) {
    return this.initObj[name] === undefined
  }
  
  /**
   * @return {Iterator}
   */
  keys() {
    return Object.keys(this.initObj)
  }
  
  /**
   * @param {string} name
   * @param {any} value
   */
  set(name, value) {
    this.initObj[name] = value
  }
  
  // sort all key/value pairs based on the keys
  sort() {
    
  }
  
  /**
   * @return {string}
   */
  toString() {
    let str = ''
    for(let it in this.initObj){
      if(typeof this.initObj === 'array'){
        this.initObj[it].forEach(item=>{
          str += it+'='+item+'&'
        })
      }else{
        str += it+'='+this.initObj[it]+'&'
      }
    } 
    return str.splice(-1)

  }
  
  /**
   * @return {Iterator} values
   */
  values() {
    let res = []
    for(let it in this.initObj){
      res.push(this.initObj[it])
    }
    return res
  }
}