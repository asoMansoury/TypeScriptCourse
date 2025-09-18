type Operations = {
    add:(a:number,b:number)=>number;
    sub:(a:number,b:number)=>number;
    mul:(a:number,b:number)=>number;
    div:(a:number,b:number)=>number;    
    print?(s:string):void;
    readonly test:number;
}

type Results  = {
    add:number,
    subtract:number,
    multiply:number,
    divide:number
    print?:void
}
let mathOperations:Operations = {
    add(a:number,b:number) {
        return a+b;
    },
    sub(a:number,b:number) {
        return a-b;
    },
    mul(a:number,b:number) {
        return a*b;
    },
    div(a:number,b:number) {
        return a/b;
    },
    print(s:string){
        console.log(s);
    },
    test:10
}

//manually creating object of type Results based on Operations
let mathResult:Results = {
    add:mathOperations.add(1,2),
    subtract:mathOperations.sub(1,2),
    multiply:mathOperations.mul(1,2),
    divide:mathOperations.div(1,2)
};
if(hasPrint(mathOperations) ){
    mathOperations.print(JSON.stringify(mathResult));
}

function hasPrint(x: unknown): x is { print: (s: string) => void } {
  return typeof (x as any)?.print === "function";
}


type Mutable<T> = {
  //-readonly [P in keyof T]: T[P];
};
//by using mapped types, we can create Results type based on Operations type
//mapped types are used to create new types based on existing types
//so we don't need to manually create Results object, we can create it using mapped types
type ResultsGeneric<T> = Mutable<T> & {
    //[key in keyof T ]:number 
    //[key in keyof T ]:number | void;
    //[key in keyof T ]?:number | void;
    //[key in keyof T ]-?:number | void;
    //readonly [key in keyof T ]-?:number | void;
    //-readonly [key in keyof T ]-?:number | void;
    -readonly [key in keyof T ]?:number | void;
    //-readonly [key in keyof T ]?:T[key] extends (...args:any)=>any ? number : T[key];
    
} ;
let mathResultGeneric:ResultsGeneric<Operations> = {
    add:mathOperations.add(1,2),
    sub:mathOperations.sub(1,2),    
    mul:mathOperations.mul(1,2),
    div:mathOperations.div(1,2),
    print:mathOperations.print!("hi") // we can not assign function here because we defined ResultsGeneric value as number
    //test:10 // we can not assign value to readonly property
};
mathOperations.print!(JSON.stringify(mathResultGeneric));
var add = mathResultGeneric.add;
var sub = mathResultGeneric.sub;
var mul = mathResultGeneric.mul;
var div = mathResultGeneric.div;
///till above