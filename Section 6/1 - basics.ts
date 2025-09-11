class User {
    constructor(public name: string, public age: number) {}

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const max = new User("Max", 28);
const fred = new User("Fred", 32);


console.log(max);
