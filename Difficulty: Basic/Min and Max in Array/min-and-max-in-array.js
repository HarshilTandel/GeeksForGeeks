//{ Driver Code Starts
// Initial Template for javascript
// Position this line where user code will be pasted.
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString =
        inputString.trim().split("\n").map(string => { return string.trim(); });

    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for (; i < t; i++) {

        const arr = readLine().split(' ').map(x => parseInt(x));

        let obj = new Solution();
        let res = obj.getMinMax(arr);
        console.log(res[0], res[1]);
    }
}

// } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript
// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number[]}
 */

class Solution {
    getMinMax(arr) {
        // code here
            let maxElm = Math.max(...arr);
    let minElm = Math.min(...arr);
    return [minElm,maxElm]
    }
}