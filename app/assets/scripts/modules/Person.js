/*
function Person(fullName, favColor) {
    this.fullName = fullName;
    this.favoriteColor = favColor;
    this.greet = function() {
        console.log(`Hello There, my name is ${this.fullName}, and my favorite color is ${this.favoriteColor}.`);
    }
} 
*/

class Person {
    constructor(fullName, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log(`Hello There, my name is ${this.name}, and my favorite color is ${this.favoriteColor}.`);
    }
}

export default Person;