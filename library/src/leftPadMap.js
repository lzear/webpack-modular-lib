/**
 * Utility function optionally imported by project using "mypackagename"
 */

import leftPad from 'left-pad';

// eslint-disable-next-line
import { _map } from 'mypackagename';

/** This would produce big bundles */
// import { _map } from './';

import './someweight/10kb';

const leftPadMap = length => array => _map(array, v => leftPad(v, length));

export { leftPadMap };
