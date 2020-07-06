const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

    const files = [
    './dist/first/main-es5.js',
    './dist/first/polyfills-es5.js',
    './dist/first/runtime-es5.js',
    ];

    await fs.ensureDir('elements');
    await concat(files, 'elements/first-element.js');

})()