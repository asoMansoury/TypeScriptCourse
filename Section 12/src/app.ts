function Logger(logString:string = "Default Logger"){
    return function(constructor: Function){
    console.log(logString);
    console.log(constructor);
    }
}



@Logger("Hiii from decorator!")
class Person{
    name: string = "Max";

    constructor(){
        console.log("Creating person object...");
    }
}

const person = new Person();
console.log({person});


const person2 = new Person();
console.log({person2});