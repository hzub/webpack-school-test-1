var ClassA = require('./moduleA.js');
var moduleB = require('./moduleB.js');

require('./styles.scss');

var obj = new ClassA();

console.info('Method from class A output: ', obj.foo());
console.info('Module B output: ', moduleB);
console.info("hello, this is webpack!");
