// prettier-ignore
// so prettier does not remove the extra spacing

'use strict';

// ::::: don't forget to trace the program! :::::


//--let animal = 'horse';


//--for (let char of animal) {


    //--if (char === 'e') {

       //-- break; // <-- a keyword

    //--}


   //-- console.log(char);

//--}


//--}

let word= 'reemas olleh'
let backwards = ''

for (let character of word) {
  backwards = character + backwards;
}

console.log(word, '->', backwards)

