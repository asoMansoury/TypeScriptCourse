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
//--------------------------------------------------------------

function Log(target:any, propertyName:string | Symbol){
    console.log("Property decorator!");
    console.log(target,propertyName);
}
function Log2(target:any,name:string,descriptor: PropertyDescriptor){
    console.log("Accessor decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log3(target:any,name:string | Symbol,descriptor: PropertyDescriptor){
    console.log("Method decorator!");
    console.log(target);
    console.log(name);
    console.log(descriptor);
}

function Log4(target:any,name:string | Symbol,position:number){
    console.log("Parameter decorator!");
    console.log(target);
    console.log(name);
    console.log(position);
}

class Product{

    @Log
    title: string;
    private _price: number;

    @Log2
    set price(val:number){
        if(val > 0){
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive!");
        }
    }

    constructor(t:string,p:number){
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax:number){
       return this._price * (1 + tax); 
    }
}

const book = new Product("Book",19);
const book2 = new Product("Book2",29);
console.log(book);
console.log(book2);


function Autobind(target:any,methodName:string,descriptor:PropertyDescriptor){
    const originalMethod = descriptor.value;
    const adjDescriptor:PropertyDescriptor={
        configurable:true,
        enumerable:false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },

    };
    return adjDescriptor;
}
class Printer {
    message = "This works!";

    @Autobind
    showMessage(){
        console.log(this.message)
    }
}
const p =new Printer();
const button = document.querySelector('button');
button?.addEventListener('click',p.showMessage);
//------------------------------------------------

interface ValidatorConfig{
    [property:string]:{
        [validatableProp:string]:string[] // ['required','positive']
    }
}

const registeredValidator:ValidatorConfig = {};

function Required(target:any,propName:string){
    registeredValidator[target.constructor.name]={
        ...registeredValidator[target.constructor.name],
        [propName]:['required']
    }
}

function PositiveNumber(target:any,propName:string){
    registeredValidator[target.constructor.name]={
        ...registeredValidator[target.constructor.name],
        [propName]:['postive']
    }
}

function validate(obj:any){
    const objValidatorConfig = registeredValidator[obj.constructor.name];
    if(!objValidatorConfig){
        return true;
    }

    let isValid = true;
    for(const prop in objValidatorConfig){
        for(const validator of objValidatorConfig[prop]){
            switch(validator){
                case 'required':
                    isValid = isValid && !!obj[prop];
                    break;
                case 'positive':
                     isValid = isValid && obj[prop] > 0;
                     break;
            }
        }
    }

    return isValid;
}

class Course {
    @Required
    title:string;
    @PositiveNumber
    price:number;

    constructor(t:string,p:number){
        this.title = t;
        this.price = p;
    }
}


const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit' , event=>{
    event.preventDefault();
    const titleEL = document.getElementById("title") as HTMLInputElement;
    const priceEL = document.getElementById("price") as HTMLInputElement;

    const title = titleEL.value;
    const price = +priceEL.value;

    const createdCourse = new Course(title,price);
    console.log(createdCourse);

        if(!validate(createdCourse)){
            alert('Invalid input, please try again!');
            return;
        }
})

