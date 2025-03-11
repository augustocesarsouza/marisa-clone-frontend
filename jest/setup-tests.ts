import '@testing-library/jest-dom';
import 'jest-styled-components';
// import 'cross-fetch/polyfill'; //isso foi para MSW

import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';

if (typeof global.TextEncoder === 'undefined') {
  global.TextEncoder = TextEncoder;
}

if (typeof global.TextDecoder === 'undefined') {
  global.TextDecoder = NodeTextDecoder as unknown as typeof global.TextDecoder;
}