"use strict";

var chalk = require('chalk');

var Pond = require('./pond');

var fishFry = function fishFry(pond, eaters) {
  var _ref, _pond$fish$map$filter;

  _ref = (_pond$fish$map$filter = pond.fish.map(bait).filter(catchEm).filter(keepTheBigOnes).reduce(weighEm, 0), decide(eaters)(_pond$fish$map$filter)), console.log(_ref);
};

var bait = function bait(fish) {
  return {
    strength: fish.strength - .1,
    weight: fish.weight
  };
};

var catchEm = function catchEm(fish) {
  return fish.strength < .5;
};

var keepTheBigOnes = function keepTheBigOnes(fish) {
  return fish.weight > 2.5;
};

var weighEm = function weighEm(totalWeight, fish) {
  return totalWeight + fish.weight;
};

var decide = function decide(eaters) {
  return function (totalWeight) {
    var message = "[".concat(totalWeight.toFixed(2), " POUNDS]");
    return totalWeight > eaters ? chalk.green(message + ' We get a fish fry!') : chalk.red(message + ' Not enough fish...');
  };
};

var midwayEmployees = 400;
var sizeOfPond = Math.random() * 1000;
var pond = new Pond(sizeOfPond);
pond.spawnFish();
fishFry(pond, midwayEmployees);