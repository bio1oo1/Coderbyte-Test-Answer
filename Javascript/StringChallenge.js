/*********************** String Challenge ***********************

Have the function StringChallenge(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example if strArr is [aaabaaddae, aed] then the smallest substring of N that contains the characters a, e, and d is dae located at the end of the string. So for this example your program should return the string dae.

Another example if strArr is [aabdccdbcacd, aad] then the smallest substring of N that contains all of the characters in K is aabd which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.

Examples
Input [ahffaksfajeeubsne, jefaa]
Output aksfaje

Input [aaffhkksemckelloe, fhea]
Output affhkkse
 ***************************************************************/

// ========== Soution - 1 ==========

// get ascii code of char 'a' => 0, 'b' => 1 ...
const getAsciiCode = (ch) => (ch.charCodeAt(0) - 97)

// main function
function StringChallenge(strArr) { 
  let count = Array(26).fill(0);
  let cur = Array(26).fill(0);

  let total = 0;

  for (let c of strArr[1]) {
    count[getAsciiCode(c)]++;
  }
  
  total = count.filter(s => s !== 0).length;

  let str = strArr[0], ed = 0, st = 0;
  let matchCount = 0;

  while (matchCount < total && ed < str.length) {
    let c = getAsciiCode(str[ed++])
    cur[c]++;
    if (cur[c] === count[c]) {
      matchCount++;
    }
  }

  let ans = str.length, fst, fed;

  for (let st in str) {
    if (ans > ed - st - 1) {
      ans = ed - st - 1;
      fst = st;
      fed = ed;
    }

    let c = getAsciiCode(str[st]);
    cur[c]--;

    while (cur[c] < count[c] && ed < str.length) {
      cur[getAsciiCode(str[ed++])]++;
    
    }
    if (ed == str.length) break;
  }

  return str.slice(fst, fed);
}
   
// keep this function call here 
console.log(StringChallenge(["ahffaksfajeeubsne", "jefaa"]));
console.log(StringChallenge(["aaffhkksemckelloe", "fhea"]));



// ========== Soution - 2 (Low Quality) ==========
/*
function MinWindowSubstring (stringArray) {
    let string = stringArray[0];
    let target = stringArray[1];
    let targetDictionary = {};
    let stringDictionary = {};
    for(let i=0; i<target.length; i++){
        if(target[i] in targetDictionary) targetDictionary[target[i]] += 1;
        else targetDictionary[target[i]] = 1;
    }
    let leftPointer = 0;
    let rightPointer = 0;
    let subStringLength = 2147483647;
    let lp = 0;
    let rp = 0;
    while(true) {
        if(leftPointer > rightPointer || rightPointer > string.length) break;
        let flag = checkObjectKeysArray(Object.keys(targetDictionary), Object.keys(stringDictionary), targetDictionary, stringDictionary);
        if(flag === true) {
            if((rightPointer - leftPointer + 1) <= subStringLength){
                subStringLength = rightPointer - leftPointer + 1;
                lp = leftPointer;
                rp = rightPointer;
            }
            if(string[leftPointer] in stringDictionary) stringDictionary[string[leftPointer]] -= 1;
            leftPointer++;
        } 
        else {
            if(string[rightPointer] in stringDictionary) stringDictionary[string[rightPointer]] += 1;
            else stringDictionary[string[rightPointer]] = 1;
            rightPointer++; 
        }
    }
    return string.substring(lp, rp);
};
function checkObjectKeysArray(array1, array2, targetDictionary, stringDictionary){
    if(array2.length===0 || array1.length > array2.length) return false;
    let temp = false;
    for(let i=0; i<array1.length; i++){
        temp = false;
        for(let j=0; j<array2.length; j++){
            if(array1[i] === array2[j] && targetDictionary[array1[i]] <= stringDictionary[array2[j]]) {
                temp = true;
                break;
            }
        }
        if(temp===false) break;
    }
    return temp;
}

// KEEP THIS FUNCTION CALL HERE
console.log(MinWindowSubstring(readline()));
*/