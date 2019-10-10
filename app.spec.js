const assert = require('assert');
const domino = require('domino');

describe('app', () => {
  it('works', () => {
    const html = '<html><head><title>fakeTitle</title></head><body></body></html>';
    // Domino gives us enough of the DOM API that we can run our JavaScript in node rather than the
    // browser. That makes this test a lot faster
    global.document = domino.createWindow(html, '/').document;
    // Make all Domino types available as types in the global env.
    Object.assign(global, domino.impl);

    require('my_bazel_project/app.es5.js');
    const expected = `hello worldhello marshello bob`;
    assert(global.document.body.textContent === expected)
  });
});
