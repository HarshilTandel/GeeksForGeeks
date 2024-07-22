//{ Driver Code Starts

process.stdin.resume();
process.stdin.setEncoding('utf-8');

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

        let n = parseInt(readLine());

        let arr = new Array(n);
        let input_arr = readLine().split(' ').map(x => parseInt(x));
        for (let i = 0; i < n; i++) {
            arr[i] = input_arr[i];
        }

        let obj = new Solution();
        let res = obj.largest(n, arr);
        console.log(res);
    }
}

// } Driver Code Ends



class Solution {
    /**
    * @param number n
    * @param number[] arr

    * @returns number
    */
    largest(n, arr) {
        // code here
            let largestElm = Math.max(...arr);
    return largestElm;
    }
}
