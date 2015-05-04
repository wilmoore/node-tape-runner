'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')
var path = require('path')

/*!
 * imports (local).
 */

var autorun = require('./')

/*!
 * default test file fixtures.
 */

var fixtures = [
  { name: './test', file: 'root-test.test.js' },
  { name: './lib', file: 'lib-sub-test.tests.js' },
  { name: './app', file: 'tests.js' }
]

/*!
 * autorun files.
 */

var autorunFiles = autorun().filter(string).map(path.basename)

/*!
 * tests.
 */

test('autorun() locates test files in default locations', function (t) {
  t.plan(fixtures.length)

  fixtures.forEach(function (f) {
    t.assert(exists(f.file), f.name)
  })
})

/*!
 * Whether file exists.
 *
 * @param {String} file
 * @return {Boolean}
 */

function exists (file) {
  return !!~autorunFiles.indexOf(file)
}

/*!
 * Whether value is a string.
 *
 * @param {String} str
 * @return {Boolean}
 */

function string (str) {
  return String(str) === str
}
