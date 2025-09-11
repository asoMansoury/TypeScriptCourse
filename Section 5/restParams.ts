const person={
    name: "John",
    age: 30,
};

const copiedPerson = {...person}


const add = (...args: number[]) => {
    //approach 1: Using a for loop
    // let result = 0;
    let result = 0;
    for (const arg of args) {
        result += arg;
    }

    //approach 2: Using reduce
    // result = args.reduce((sum, current) => sum + current, 0);
    return args.reduce((sum, current) => sum + current, 0);
};
let addNumbers =add(1, 2, 3, 4, 5);
console.log(addNumbers); // Output: 15

const add2 = (...numbers:[number, number, number]) => {
    return numbers.reduce((sum, current) => sum + current, 0);
}
addNumbers = add2(1, 2, 3);
console.log(addNumbers); // Output: 6
//****************************************************************************************************************************************** */

const hobbies = ["Sports", "Cooking","Reading","Traveling","Gaming","Swimming"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log(activeHobbies); // Output: ["Hiking", "Sports", "Cooking"]

//****************************************************************************************************************************************** */
//Destructuring with Rest
const [firstHobby, secondHobby, ...remainingHobbies] = hobbies;
console.log(firstHobby); // Output: "Sports"
console.log(secondHobby); // Output: "Cooking"
console.log(remainingHobbies); // Output: ["Reading", "Traveling", "Gaming", "Swimming"]
//****************************************************************************************************************************************** */

//Destructuring with Rest in Objects
const personWithHobbies = {
    name: "Alice",
    age: 25,
    hobbies: ["Reading", "Traveling", "Cooking"]
};
const { name:firstName, age, ...otherDetails } = personWithHobbies;
console.log(firstName); // Output: "Alice"
console.log(age); // Output: 25
console.log(otherDetails); // Output: { hobbies: ["Reading", "Traveling", "