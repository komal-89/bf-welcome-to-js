// #todo

'use strict';

let didConfirm = confirm('ok?');

let message;
if (didConfirm) {
  message = 'ok';
} else {
  message = 'yes';
}

alert(message);
