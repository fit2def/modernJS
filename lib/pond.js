"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// destructuring -- notice that our import also has a SnappingTurtle constructor, but we can just take what we need
var _require = require('./animals'),
    Fish = _require.Fish;

var Pond =
/*#__PURE__*/
function () {
  function Pond(capacity) {
    _classCallCheck(this, Pond);

    _defineProperty(this, "fish", []);

    this.maxGenerationSize = Math.max(capacity - this.fish.length, 0);
    this.baseWeight = capacity / 1000;
  }

  _createClass(Pond, [{
    key: "spawnFish",
    value: function spawnFish() {
      var _ref, _ref2, _ref3;

      _ref = (_ref2 = (_ref3 = Math.random() * this.maxGenerationSize, Math.floor(_ref3)), this.createNRandomFish(_ref2)), this.addFishToPond(_ref);
    }
  }, {
    key: "createNRandomFish",
    value: function createNRandomFish(n) {
      var _fill;

      return (_fill = new Array(n).fill(this.baseWeight), this.createRandomWeights(_fill)).map(function (weight) {
        return new Fish(weight);
      });
    }
  }, {
    key: "createRandomWeights",
    value: function createRandomWeights(fishTemplates) {
      return Array.from(fishTemplates, function (base) {
        return base + Math.random() * 5;
      });
    }
  }, {
    key: "addFishToPond",
    value: function addFishToPond(newFish) {
      this.fish = _toConsumableArray(this.fish).concat(_toConsumableArray(newFish));
    }
  }]);

  return Pond;
}();

module.exports = Pond;