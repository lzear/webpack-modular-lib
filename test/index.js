import { leftPadMap } from 'mypackagename/dist/leftPadMap';
import { leftPadMapReverse } from 'mypackagename/dist/leftPadMapReverse';
import { lorem10 } from './lorems';

console.log(leftPadMap(5)('Was it a car or a cat I saw?'.split(' ')).join(' '));
console.log(leftPadMapReverse(6)('Was it a car or a cat I saw?'.split(' ')).join(' '));

console.log(leftPadMap(5)(lorem10).join(' '));
console.log(leftPadMapReverse(6)(lorem10).join(' '));
