This package was created for avoid to use "eval" in javascript when you need to convert function string to in-memory function.

Use example:
```javascript
var stringToFunction = require('string-to-function');
var sum = stringToFunction('function sum(a, b){ return a+b; }');
var result = sum(1, 1);
// result === 2
```