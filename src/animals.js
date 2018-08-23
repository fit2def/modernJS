const chalk = require('chalk');

class Animal {
    constructor(weight) {
        this.weight = weight;
    }

    speak() {
        console.log(chalk.yellow(`"I am a ${this.constructor.name}"`));   //This is hard to read!
        
        `"I am a ${this.constructor.name}"` // template literals, like C# string interpolation
        |> chalk.blue 
        |> console.log;
    }
}

class Fish extends Animal {
    strength = Math.random();  //new property syntax. No need to prefix with 'this.' when declaring

    constructor(weight) {
        super(weight); // same as base() in C#
    }
}

new Fish().speak();

class SnappingTurtle extends Animal {

}

module.exports = {
    Fish, // notice the shorthand object literal syntax. We don't need to specify Fish: Fish 
    SnappingTurtle
};