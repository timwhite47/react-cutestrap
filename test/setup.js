import { jsdom } from 'jsdom';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinonChai from "sinon-chai";

chai.use(sinonChai);
chai.use(chaiEnzyme());
const doc = jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
const navigator = {
  userAgent: 'mocha.js',
};

global.document = doc;
global.window = win;
global.navigator = navigator;
window.navigator = navigator;
