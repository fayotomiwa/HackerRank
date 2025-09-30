'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
        
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    let minSum = total;
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSum = total - arr[i];
        if (currentSum < minSum) {
            minSum = currentSum;
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
        }
    }

    console.log(minSum, maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
