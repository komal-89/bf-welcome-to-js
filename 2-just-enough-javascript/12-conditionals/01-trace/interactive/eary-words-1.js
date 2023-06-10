// #todo

'use strict';

let input = prompt('enter something with "hello" ');

let message = "";
if (input === null) {
  message = 'you canceled';
} else {
  if (input.includes('ear')) {
    message = 'eary!';
  } else {
    message = 'not eary :(';
  }
}

alert(message);
