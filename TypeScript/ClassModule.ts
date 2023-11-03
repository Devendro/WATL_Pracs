// To Run this file go in terminal and write command "tsc filename.ts" after that new js file will be generated and you can run that js file to see the output 

class Person {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);
person1.greet();
person2.greet();
