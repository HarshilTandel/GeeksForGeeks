//{ Driver Code Starts
// Initial Template for javascript

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => { inputString += inputStdin; });

process.stdin.on('end', _ => {
    inputString = inputString.trim().split("\n").map(string => string.trim());
    main();
});

function readLine() { return inputString[currentLine++]; }

function main() {
    let t = parseInt(readLine());
    for (let i = 0; i < t; i++) {
        const arr = readLine().split(' ').map(x => parseInt(x));
        let obj = new Solution();
        let ans = obj.print2largest(arr);
        console.log(ans);
    }
}

// } Driver Code Ends

// } Driver Code Ends


// User function Template for javascript

class Solution {
    // Function returns the second largest element
    print2largest(arr) {
        // Code Here

    if (arr.length < 2) {
        return -1;
    }

   
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num < first && num > second) {
   second = num;
        }
    }


    return second === -Infinity ? -1 : second;
}
}