//{ Driver Code Starts
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        let input_ar1 = readLine().split(' ').map(x => parseInt(x));

        // let n = input_ar1[0]; // The first element is n (size of the full
        // permutation)
        let arr = input_ar1; // The remaining elements are the array of n-1 numbers

        let obj = new Solution();
        console.log(obj.missingNumber(arr));
        console.log("~");
    }
}
// } Driver Code Ends


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */

class Solution {
    // Function to find the missing number in the array.
    missingNumber(arr) {
        // code here
            let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] === mid + 1) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return start + 1;
    }
}