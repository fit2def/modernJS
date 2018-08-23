"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var chalk = require('chalk');

var Animal =
/*#__PURE__*/
function () {
  function Animal(weight) {
    _classCallCheck(this, Animal);

    this.weight = weight;
  }

  _createClass(Animal, [{
    key: "speak",
    value: function speak() {
      var _ref, _ref2;

      console.log(chalk.yellow("\"I am a ".concat(this.constructor.name, "\""))); //This is hard to read!

      _ref = (_ref2 = "\"I am a ".concat(this.constructor.name, "\"") // template literals, like C# string interpolation
      , chalk.blue(_ref2)), console.log(_ref);
    }
  }]);

  return Animal;
}();

var Fish =
/*#__PURE__*/
function (_Animal) {
  _inherits(Fish, _Animal);

  //new property syntax. No need to prefix with 'this.' when declaring
  function Fish(weight) {
    var _this;

    _classCallCheck(this, Fish);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Fish).call(this, weight)); // same as base() in C#

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "strength", Math.random());

    return _this;
  }

  return Fish;
}(Animal);

new Fish().speak();

var SnappingTurtle =
/*#__PURE__*/
function (_Animal2) {
  _inherits(SnappingTurtle, _Animal2);

  function SnappingTurtle() {
    _classCallCheck(this, SnappingTurtle);

    return _possibleConstructorReturn(this, _getPrototypeOf(SnappingTurtle).apply(this, arguments));
  }

  return SnappingTurtle;
}(Animal);

module.exports = {
  Fish: Fish,
  // notice the shorthand syntax. We don't need to specify Fish: Fish
  SnappingTurtle: SnappingTurtle
};