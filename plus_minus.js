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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var [p,m,z]= arr.reduce((result, elem,)=>{
        const temp = elem > 0 ?[1,0,0] : elem < 0 ?[0,1,0]: [0,0,1];
     return [result[0] + temp[0], result[1] + temp[1], result[2] + temp[2]]
    },[0,0,0])
    console.log((p/arr.length).toFixed(9),"\n",(m/arr.length).toFixed(9),"\n",(z/arr.length).toFixed(9));
}
plusMinus([0,0,-3,7,2,6]);

// function main() {
//     const n = parseInt(readLine().trim(), 10);

//     const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

//     plusMinus(arr);
// }
