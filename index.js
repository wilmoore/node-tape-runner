'use strict'

/*!
 * imports.
 */

var apply = require('apply-or')
var array = require('to-array.js')
var glob = require('globby').sync
var path = require('path')
var root = require('package.root')
var test = require('tape-catch')

/*!
 * exports.
 */

module.exports = runner

/*!
 * patterns.
 */

var patterns = [
  'test/**/*.test{,s}.js',
  'test/**/test{,s}.js',
  'lib/**/*.test{,s}.js',
  'lib/**/test{,s}.js',
  'app/**/*.test{,s}.js',
  'app/**/test{,s}.js'
]

/*!
 * A tape runner API allowing you to create custom test runners.
 */

function runner (params, files) {
  var list = array(files || globs())

  list.forEach(function (file) {
    apply(require(path.resolve(file)), [test].concat(params))
  })

  return list
}

/**
 * Find test files via glob patterns.
 * @return {Array}
 */

function globs () {
  return glob(patterns.map(rootify))
}

/**
 * Prepend root directory name to pattern.
 * @return {String}
 */

function rootify (pattern) {
  return path.resolve(root.path, pattern)
}
