// #todo

'use strict';

let greeting = 'Good morning';

{
  let newGreeting = 'Good bye';
  greeting = newGreeting;
}

console.log(greeting === 'Good bye');
