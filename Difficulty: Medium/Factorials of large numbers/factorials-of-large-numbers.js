//{ Driver Code Starts
// Initial Template for javascript

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split('\n').map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        let N = parseInt(readLine());
        let obj = new Solution();
        let res = obj.factorial(N);
        let s = "";
        for (let it of res) {
            s += it;
            s += " ";
        }
        console.log(s);

        console.log("~");
    }
}

// } Driver Code Ends


// User function Template for javascript

/**
 * @param {number} n
 * @return {number[]}
 */

class Solution {
    factorial(n) {
        let result = [1];

        for (let i = 2; i <= n; i++) {
            let carry = 0;

            for (let j = 0; j < result.length; j++) {
                let product = result[j] * i + carry;
                result[j] = product % 10;
                carry = Math.floor(product / 10);
            }

            while (carry > 0) {
                result.push(carry % 10);
                carry = Math.floor(carry / 10);
            }
        }

        return result.reverse();
    }
}
