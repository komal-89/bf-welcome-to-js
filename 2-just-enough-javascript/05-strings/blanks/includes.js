// #todo

'use strict';

console.log('-- using .includes for case-sensitive searching --');

// examples
console.log('JavaScript'.includes('script')); // false
console.log('JavaScript'.includes('Script')); // true
console.log('JavaScript'.includes('vaSc')); // true
console.log('JavaScript'.includes('VAsC')); // false

// exercises
console.log('helloAll'.includes('All')); //true
console.log('HTMLWebsite'.includes('Website')); //true
console.log('cssDesign'.includes('Design')); //true
console.log('helloAll'.includes('all')); //false
