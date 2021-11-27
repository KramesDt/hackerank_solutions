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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {

    return Array(a.length).fill(0).reduce((result,elem,ind)=>{
        const temp = a[elem]==b[ind] ?[0,0]:a[ind]>b[ind]?[1,0]:[0,1]
        console.log(temp);
        return [result[0]+temp[0],result[1]+temp[1] ]
    },[0, 0])
}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]));


// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

//     const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

//     const result = compareTriplets(a, b);

//     ws.write(result.join(' ') + '\n');

//     ws.end();
// }

// main()