function Logger(logString:string = "Default Logger"){
    return function(constructor: Function){
    console.log(logString);
    console.log(constructor);
    }
}

function withTemplate(template:string,hookId:string){
    return function(constructor:any){
        const hookEl = document.getElementById(hookId);
        const p = new constructor() as any;
        if(hookEl){
            hookEl.innerHTML = template;

            hookEl.querySelector("h1")!.textContent = p.name;
        }
    }
}


@Logger("Hiii from decorator!")
@withTemplate("<h1>My Person Object</h1>","app")
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