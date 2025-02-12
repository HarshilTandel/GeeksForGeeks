//{ Driver Code Starts
//Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let str = readLine().trim();
        let obj = new Solution();
        let res = obj.reverseWord(str);
        console.log(res);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {string} str
 * @return {string}
*/

class Solution {
    reverseWord(s) {
        // Convert string to array, reverse the array, and join it back to a string
        return s.split('').reverse().join('');
    }
}