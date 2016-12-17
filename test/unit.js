'use strict';
var assert = require('chai').assert;
var stringToFunction = require('../');
suite('Unit tests', function () {
  test('Should convert function without parameters', function () {
    var stringFn = 'function() { return 1; }';
    var fn = stringToFunction(stringFn);
    var actual = fn();
    var expected = 1;
    assert.equal(actual, expected);
  });
  test('Should convert function containing 1 parameter', function () {
    var stringFn = 'function(a) { return a; }';
    var fn = stringToFunction(stringFn);
    var actual = fn(1);
    var expected = 1;
    assert.equal(actual, expected);
  });
  test('Should convert function containing 2 parameters separated by space and comma', function () {
    var stringFn = 'function(a, b) { return a+b; }';
    var fn = stringToFunction(stringFn);
    var actual = fn(1, 2);
    var expected = 3;
    assert.equal(actual, expected);
  });
  test('Should convert function containing 2 parameters separated just by comma', function () {
    var stringFn = 'function(a,b) { return a+b; }';
    var fn = stringToFunction(stringFn);
    var actual = fn(1, 2);
    var expected = 3;
    assert.equal(actual, expected);
  });
  test('Should convert function containing 3 parameters', function () {
    var stringFn = 'function(a, b, c) { return a+b+c; }';
    var fn = stringToFunction(stringFn);
    var actual = fn(1, 2, 3);
    var expected = 6;
    assert.equal(actual, expected);
  });
  test('Should convert function containing line break', function () {
    var stringFn = 'function(a, b) {\nreturn a+b;\n}';
    var fn = stringToFunction(stringFn);
    var actual = fn(1, 2);
    var expected = 3;
    assert.equal(actual, expected);
  });
  test('Should convert named function ', function () {
    var stringFn = 'function namedFunction(a, b) {\nreturn a+b;\n}';
    var fn = stringToFunction(stringFn);
    var actual = fn(1, 2);
    var expected = 3;
    assert.equal(actual, expected);
  });
});

