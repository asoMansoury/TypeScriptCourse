
let hobbies:string[] = ['Sports','Cooking'];

let users:(string | number|boolean)[] ;//approach 1
let usersArray:Array<string | number|boolean>; //approach 2

users = [1,'Max',true];
usersArray = [1,'Max',true];
usersArray = users;
///////////////////////////////////////////////////////

//Tuple variables samples
let possibleResults: [number,number];
possibleResults = [1,-1];
//possibleResults = [1,-1,3]; //error


// object types
let user: { name: string; 
    age: number | string;
    hobbies: Array<string|number>;
    role : {
        description: string;
        id: number;
    }
};
user = {
    name: 'Max',
    age: 38,
    hobbies: ['Sports','Cooking',9],
    role: {
        description: 'Admin',
        id: 1
    }   
};

let test = {
    fatherName: 'Max',
}

let value:{} = "is a value";
value = {
    name:'aso'
}
let data:Record<string,typeof user>;//key is string and value is of type user
data = {
    "user": user
}

console.log(data["user"]);


