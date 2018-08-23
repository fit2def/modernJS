const chalk = require('chalk');
const Pond = require('./pond');

const fishFry = (pond, eaters) => {
    pond.fish
        .map(bait)
        .filter(catchEm)
        .filter(keepTheBigOnes)
        .reduce(weighEm, 0)
        |> decide(eaters)
        |> console.log
}

const bait = fish => ({
    strength: fish.strength - .1,
    weight: fish.weight
});

const catchEm = fish => fish.strength < .5;

const keepTheBigOnes = fish => fish.weight > 2.5;

const weighEm = (totalWeight, fish) => totalWeight + fish.weight;

const decide = eaters => totalWeight => {
    const message = `[${totalWeight.toFixed(2)} POUNDS]`;

    return totalWeight > eaters
        ? chalk.green(message + ' We get a fish fry!')
        : chalk.red(message + ' Not enough fish...')
};


const midwayEmployees = 400;
const sizeOfPond = Math.random() * 1000;
const pond = new Pond(sizeOfPond);
pond.spawnFish();

fishFry(pond, midwayEmployees);