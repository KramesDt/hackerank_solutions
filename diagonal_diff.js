'use strict';

const fs = require('fs');

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
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

// function diagonalDifference(arr) {
//     // Write your code here
//     var n  = arr.lenght;
//     var firstDiag = 0;
//     var secondDiag = 0;

//     for (var i = 0; i <= n; i++){
//         for (var j = 0; j <= n; j++){
//             if (i == j){
//                 firstDiag += arr[i][j]
//             }

//             if ((i + j) == n-1){
//                 secondDiag += arr[i][j]
//             }
//         }
//     }

//     return (Math.abs(firstDiag - secondDiag));

// }

function diagonalDifference(arr) {
let leftDiagSum = 0;
let rightDiagSum = 0;
for (let i = 0; i < arr.length; i++) {
    leftDiagSum += arr[i][i];
    rightDiagSum += arr[i][arr[i].length - (i + 1)];
}
let sum = Math.abs(leftDiagSum - rightDiagSum);
return sum;
}
console.log(diagonalDifference([[2, 6, 9], [5, 3, -1], [9, 8, -2]]));
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const n = parseInt(readLine().trim(), 10);

//     let arr = Array(n);

//     for (let i = 0; i < n; i++) {
//         arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
//     }

//     const result = diagonalDifference(arr);

//     ws.write(result + '\n');

//     ws.end();
