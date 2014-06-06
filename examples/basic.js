var Bfi = require('../index.js');

var a = new Bfi();
a.digits.push(Math.pow(2, 26) - 1);
a.digits.push(Math.pow(2, 26) - 1);
var b = new Bfi();
b.digits.push(8);
a.add(b);
console.log("" + a);


var e = Math.pow(2, 26) - 1;
e *= 2;
console.log(e.toString(2));
console.log(e.toString(2).length);
console.log((e*e).toString(2));
console.log((e*e).toString(2).length);
return;

for (var i = 0; i < 65; i++) {
    var a = Math.pow(2, i);
    console.log(i, a - 1, a, a + 1);
    console.log(a.toString(16));
}
