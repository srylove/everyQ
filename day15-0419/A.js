

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