type User = {name:string,age:number};
type UserKeys = keyof User;

let validKey:UserKeys;
validKey = 'name';
validKey = 'age';
//validKey = 'age1'; // error


function getProp(obj,key){
    const val = obj[key];
    if(val ===undefined || val === null){
        throw new Error("No value");
    }

    return val;
}

function getPropSafe<T,K extends keyof T>(obj:T,key:K){
    return obj[key];
}

getPropSafe({name:'Max',age:30},'name');
getPropSafe({name:'Max',age:30},'age');
//getPropSafe({name:'Max',age:30},'age1'); // error