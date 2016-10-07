import { jsdom } from 'jsdom';

const doc = jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
const navigator = {
  userAgent: 'mocha.js',
};

global.document = doc;
global.window = win;
global.navigator = navigator;
window.navigator = navigator;
