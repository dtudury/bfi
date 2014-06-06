module.exports = Bfi;

var _MAX_BITS = 26;
var _MAX_DIGIT = Math.pow(2, _MAX_BITS);

function Bfi() {
    var self = this;
    self.digits = [];
    self.toString = function () {return _digits_to_base(self.digits);};
    self.add = function (b) {return self.digits = Bfi.add(self, b);};
    self.multiply = function (b) {return self.digits = Bfi.multiply(self, b);};
}

Bfi.add = function (a, b) {
    var carry = 0;
    var output = [];
    for (var i = 0; (i < a.digits.length) || (i < b.digits.length) || carry; i++) {
        var digit = (a.digits[i] || 0) + (b.digits[i] || 0) + carry;
        if (digit >= _MAX_DIGIT) {
            carry = Math.floor(digit / _MAX_DIGIT);
            digit = digit % _MAX_DIGIT;
        } else {
            carry = 0;
        }
        output.push(digit);
    }
    return output;
};

Bfi.multiply = function (a, b) {
    var carry = 0;
    var output = [];
    for (var i = 0; (i < a.digits.length) || (i < b.digits.length) || carry; i++) {
        var digit = (a.digits[i] || 0) + (b.digits[i] || 0) + carry;
        if (digit >= _MAX_DIGIT) {
            carry = Math.floor(digit / _MAX_DIGIT);
            digit = digit % _MAX_DIGIT;
        } else {
            carry = 0;
        }
        output.push(digit);
    }
    return output;
};

function _digits_to_base(digits) {
    if (!digits.length) return "0";
    var output = "";
    for (var i = 0; i < digits.length; i++) {
        var digit = digits[i];
        var digit_str = digit.toString(2);
        if (i < digits.length - 1) {
            while (digit_str.length < _MAX_BITS) digit_str = '0' + digit_str;
        }
        output = digit_str + output;
    }
    return output;
}


//in float land: 2^53 + 1 == 2^53 (so stop at 2^53)
