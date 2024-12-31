//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
//  Initial Template for javascript

// Driver code
const readline = require('readline');
const rl = readline.createInterface({input : process.stdin, output : process.stdout});

let inputLines = [];
let currentLine = 0;

rl.on('line', (line) => { inputLines.push(line.trim()); });

rl.on('close', () => { main(); });

function readLine() { return inputLines[currentLine++]; }

function main() {
    let tc = parseInt(readLine());
    while (tc > 0) {
        let arr1 = readLine().split(' ').map(Number);
        let arr2 = readLine().split(' ').map(Number);
        let ob = new Solution();
        let ans = ob.calc_Sum(arr1, arr2);
        console.log(ans);
        console.log("~");
        tc--;
    }
}

// } Driver Code Ends


// User function Template for javascript
class Solution {
    calc_Sum(arr1, arr2) {
        let carry = 0;
        let result = [];
        let i = arr1.length - 1;
        let j = arr2.length - 1;

        while (i >= 0 || j >= 0 || carry > 0) {
            let digitA = i >= 0 ? arr1[i] : 0;
            let digitB = j >= 0 ? arr2[j] : 0;

            let sum = digitA + digitB + carry;
            let digit = sum % 10;
            carry = Math.floor(sum / 10);

            result.push(digit);
            i--;
            j--;
        }

        result.reverse();
        return result.join(""); // Return the result as a string to handle large numbers
    }
}
