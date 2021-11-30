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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    return candles.reduce((result,elem)=>{
        return result[1]==elem?[result[0]+1,elem]:result[1]<elem?[1,elem]:result
    },[0,0])[0]
}

console.log(birthdayCakeCandles([3, 2, 1, 3, 2, 2, 9, 9,9]))

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const candlesCount = parseInt(readLine().trim(), 10);

//     const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

//     const result = birthdayCakeCandles(candles);

//     ws.write(result + '\n');

//     ws.end();
// }
