# tape-runner
> A tape runner API allowing you to create custom test runners.

[![Build Status](http://img.shields.io/travis/wilmoore/node-tape-runner.svg)](https://travis-ci.org/wilmoore/node-tape-runner) [![Code Climate](https://codeclimate.com/github/wilmoore/node-tape-runner/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/node-tape-runner) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install tape-runner --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/tape-runner.svg)](https://www.npmjs.org/package/tape-runner) [![NPM downloads](http://img.shields.io/npm/dm/tape-runner.svg)](https://www.npmjs.org/package/tape-runner) [![Dependency Status](https://gemnasium.com/wilmoore/node-tape-runner.svg)](https://gemnasium.com/wilmoore/node-tape-runner)

## API Example

###### test.js

```js
var runner = require('tape-runner');
runner([
  require('./') // inject test subject into each exported test function.
])
```

###### test/*.test.js

```js
module.exports = function (test, testSubject) {
  test('testSubject()', function (t) {
    t.equal(testSubject(), 'Hello World', 'testSubject() returns Hello World')
    t.end()
  })
}
```

## Features

 - Auto-locates tests in the `test`, `lib`, and `app` directories.
 - Supports naming test files `*.test.js`, `*.tests.js`, `test.js`, and `tests.js`.
 - Supports passing values into tests.
 - Supports passing in an alternative array of test files.

## API

### `runner(params, files)`

###### arguments

 - `[params]: (Array)` parameters to pass to exported test function.
 - `[files]: (Array)` files to pass to exported test function.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/node-tape-runner.svg)](https://github.com/wilmoore/node-tape-runner/blob/master/license)
