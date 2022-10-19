'use strict';

const signal = '';
switch (signal) {
  case 'red':
    console.log('stop');
    break;
  case 'yellow':
    console.log('caution');
    break;
  case 'blue':
    console.log('go');
    break;
  default:
    console.log('wrong signal');
    break;
}
