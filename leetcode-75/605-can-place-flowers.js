
//605. Can Place Flowers

// You have a long flowerbed in which some of the plots are planted, 
// and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer array flowerbed containing 0's and 1's, where 0 
// means empty and 1 means not empty, and an integer n, return true 
// if n new flowers can be planted in the flowerbed without violating 
// the no-adjacent-flowers rule and false otherwise.

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (n===0) return true;
    
    if (flowerbed.length ===1) {
        return (flowerbed[0] === 0 && n===1);
    }


    for (let i=0; i<flowerbed.length; i++){


        if (i!=0 && i!=flowerbed.length - 1 && flowerbed[i]===0) {
            if (flowerbed[i-1]===0 && flowerbed[i+1]===0) {
                flowerbed[i] = 1;
                n--
            }
        }

        if (i===0 && flowerbed[i] === 0 &&  flowerbed[i+1]===0) {
            flowerbed[i] = 1;
            n--
        }

        if (i===flowerbed.length-1 && flowerbed[i-1]===0 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            n--
        }

        if (n===0) return true
    }

    return false;
};


// Other solutions

function canPlaceFlowersOne(flowerbed, n) {
    let noAdjacent = 0

    flowerbed.forEach((_value, index) => {
        const prev = index - 1 
        const next =  index + 1

        if (!flowerbed[prev] && !flowerbed[index] && !flowerbed[next]) {
            noAdjacent++
            flowerbed[index] = 1
        }
    })

    return noAdjacent >= n
};


/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowersTwo = function (flowerbed, n) {
    let count =0;
      for (let i = 0; i < flowerbed.length; i+=2) {
        if (flowerbed[i] === 0){
          if ( i=== flowerbed.length -1 || flowerbed[i+1]===0){
            count++;
          } else{
            i++
          }
        }
      }
      return count>=n;
    };