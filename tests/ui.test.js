import { JSDOM } from 'jsdom';
import { renderMessage } from '../src/main.js';

test('renderMessage writes Hello World to DOM', () => {
  const dom = new JSDOM('<!DOCTYPE html><div id="app"></div>');
  global.document = dom.window.document;
  const message = renderMessage('app');
  expect(dom.window.document.getElementById('app').textContent).toBe('Hello World');
  expect(message).toBe('Hello World');
});
