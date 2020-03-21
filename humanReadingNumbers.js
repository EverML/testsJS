/**
* Write a function readNumbers(x) that returns the “human read”
* representation of numbers starting from 1, where x is the number of iterations:
* readNumbers(4):
* 1: Is one one -> 11
* 11 : Is two one -> 21
* 21 : Is one two and one one -> 1211
* 1211 : Is one one, one 2 and two one -> 111221
* ... and so on
* readNumbers(4) returns 111221
*/

const { performance } = require('perf_hooks');


 function readNumbers(numberOfIterations)
{
    let humanReadableNumber = 1;
    for (let i = 1; i <= numberOfIterations; i++) {
        humanReadableNumber = generateHumanReadableNumberFrom(humanReadableNumber);        
    }
    console.log(`Human readable number would be: ${humanReadableNumber}`);
    return humanReadableNumber;
}

function generateHumanReadableNumberFrom(value)
{
    let newValue = '';
    let iteration = String(value).split(''); //array with the values

    for (let i = 0; i < iteration.length; i++) {
        const element = iteration[i];
        let contador = 1;
        for (let j = i+1; j < iteration.length && iteration[j] === element ; j++) {
            contador++;
            i = j;
        }
        newValue = newValue + contador + element;
    }
    return newValue;

}





const testcases = [
    '1', // 11 
    '2',//, // 11 - 21
    '3', // 11 - 21 - 1211
    '4', // 11 - 21 - 1211 - 111221*/
    '5',
    '6',
    '7',
    '8',
    '9',
    '10'
];

for (const test of testcases) {
    let start = performance.now();
    readNumbers(test);
    let end = performance.now();    
    
    let timeTaken = end - start; 
    console.log(`Function took  ${timeTaken}  milliseconds`); 
}
