import { leftPadMap } from 'mypackagename/dist/leftPadMap';
import { _reverse } from 'mypackagename';

/** This would produce big bundles */
// import { leftPadMap } from './leftPadMap';
// import { _reverse } from './';

const leftPadMapReverse = length => array => _reverse(leftPadMap(length)(array));

export { leftPadMapReverse };
