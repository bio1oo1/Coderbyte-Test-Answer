/********* Array Challenge (LIS: Longest Increasing Subsequence) *********

Have the function StringChallenge(strArr) take the array of strings stored in strArr, which will contain only two strings, the first parameter being the string N and the second parameter being a string K of some characters, and your goal is to determine the smallest substring of N that contains all the characters in K. For example if strArr is [aaabaaddae, aed] then the smallest substring of N that contains the characters a, e, and d is dae located at the end of the string. So for this example your program should return the string dae.

Another example if strArr is [aabdccdbcacd, aad] then the smallest substring of N that contains all of the characters in K is aabd which is located at the beginning of the string. Both parameters will be strings ranging in length from 1 to 50 characters and all of K's characters will exist somewhere in the string N. Both strings will only contains lowercase alphabetic characters.

Examples
Input: [9, 9, 4, 2]
Output: 1

Input: [10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]
Output: 7
*************************************************************************/

function ArrayChallenge(arr) {
    let dp = [];
    for (let i in arr) {
        if (i == 0) dp[i] = [1, arr[i]];
        else {
        if (arr[i] > dp[i - 1][1]) dp[i] = [dp[i - 1][0] + 1, arr[i]];
        else dp[i] = dp[i - 1];
        }
    }
    return dp[arr.length - 1][0]; 
}
     
// keep this function call here 
// console.log(ArrayChallenge(readline()));
console.log(ArrayChallenge([6, 7, 3, 1, 100, 102, 6, 12]));
console.log(ArrayChallenge([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90]));



