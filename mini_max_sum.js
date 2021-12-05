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
    arr.reduce((result, elem, ind,_arr)=>{
    const x =arr.slice();
    x.splice(ind, 1);
    let sum=x.reduce((result,elem)=>{return result+elem},0)
    if(ind==0){
        return [sum, sum]
    }
    return result[0]>sum?[sum,result[1]]:result[1]<sum?[result[0],sum]:result
    },[0,0])
    console.log(result[0], " ", result[1])
}
console.log(miniMaxSum([1,2,3,4,5,6]))


function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
