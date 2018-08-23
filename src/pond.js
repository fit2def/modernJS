// destructuring -- notice that our import also has a SnappingTurtle constructor, but we can just take what we need
const { Fish } = require('./animals');

class Pond {
    fish = [];

    constructor(capacity) {
        this.maxGenerationSize = Math.max(capacity - this.fish.length, 0);
        this.baseWeight = capacity / 1000;
    }

    spawnFish() {
        Math.random() * this.maxGenerationSize
        |> Math.floor
        |> this.createNRandomFish
        |> this.addFishToPond;
    }

    createNRandomFish(n) {
        return (new Array(n)
            .fill(this.baseWeight)
            |> this.createRandomWeights)
            .map((weight) => new Fish(weight));
    }

    createRandomWeights(fishTemplates) {
        return Array.from(fishTemplates, base => base + Math.random() * 5)
    }

    addFishToPond(newFish){
        this.fish = [...this.fish, ...newFish];
    }
}

module.exports = Pond;