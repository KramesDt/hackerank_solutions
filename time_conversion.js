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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    const trash = s.split(':')
    const zone = s.split('');

    if(zone.splice(8, 2) == ['P', 'M']){
        const time = parseInt(trash[0] + 12);
        trash.splice(2, 1);
    }else if(parseint(trash[0]) >= 12){
        parseint(trash[0]) - 12;
    }


    console.log(trash)
}

timeConversion("07:05:45PM");

// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//     const s = readLine();

//     const result = timeConversion(s);

//     ws.write(result + '\n');

//     ws.end();
// }
