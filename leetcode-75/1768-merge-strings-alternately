// You are given two strings word1 and word2. Merge 
// the strings by adding letters in alternating order, 
// starting with word1. If a string is longer than the 
// other, append the additional letters onto the end of 
// the merged string.

// Return the merged string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    lenWord1 = word1.length;
    lenWord2 = word2.length;

    const smallLen = lenWord1 < lenWord2 ? lenWord1 : lenWord2;
    let result = "";
    for (let i=0; i < smallLen; i++) {
        result += word1[i] + word2[i];
    }

    if (lenWord1 > smallLen) {
        result += word1.split("").slice(smallLen).join("")
    }

    if (lenWord2 > smallLen) {
        result += word2.split("").slice(smallLen).join("")
    }

    return result;
};

// Other solutions

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = '';
     for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
       if (i < word1.length) result += word1[i];
       if (i < word2.length) result += word2[i];
     }
     return result;
   };