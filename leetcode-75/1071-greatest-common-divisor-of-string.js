// For two strings s and t, we say "t divides s" if and only if 
// s = t + ... + t (i.e., t is concatenated with itself one 
// or more times).

// Given two strings str1 and str2, return the largest string 
// x such that x divides both str1 and str2.


//Other solution
/* @param {string} str1
* @param {string} str2
* @return {string}
*/
var gcdOfStrings = function(str1, str2) {
   
   if (str1 + str2 !== str2 + str1) {

       return "";
   }

   let n = str1.length;

   let k = str2.length;

   let gcds = function (x, y) {
       
       if (!y) {
           return x;
       }
       return gcds(y, x % y);
   }

   let div = gcds (n, k);

   return str1.slice(0, div);
};


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 != str2 + str1) return '';
 
    let isValidate = (w,str) =>{
        if(str.length == 0) return true;
        if(!str.startsWith(w)) return false;
        return isValidate(w,str.slice(w.length))
    }

    let res = ''

    for(let i = 1; i<=str1.length; i++){
        let curV = str1.slice(0,i)
        if(isValidate(curV,str2) && isValidate(curV,str1)) res = curV;
    }

    return res;
};