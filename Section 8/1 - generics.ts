let names:Array<string> = ['Max','Anna'];

type DataStore<T> = {
    [key:string ]:T
};

var gg:DataStore<string> ={
    1:"Aso"
}
console.log(gg[1]);

var dd:DataStore<String | number> = {

}
dd.name = 'max';
dd.age = 18;
//dd.isGreater = false;
//-------------------------------------------------------------------------------------------------


//function generic
function mergObj<T extends object, U extends object>(a:T,b:U){
    return {...a,...b};
};
const merged = mergObj({username:"max"},{age:35});
console.log(merged);


function merge<T extends number,B extends number,Output extends {
    a:T,
    b:B,
    sum:number
}>(a:T,b:B):Output{
  return { a, b, sum: a + b } as Output;
}
var result = merge(1,2);
console.log({result});


//Generic for class and interfaces
class User<T>{
    constructor(public id:T){

    }
}
interface IRole<T> {
    mergObj(a:T):void;
    merge<T extends number,B extends number,Output extends {
        a:T,
        b:B,
        sum:number
    }>(a:T,b:B):Output;
}


class RoleImp implements IRole<string | number> {

    private roles: Array<string | number> = [];

    mergObj(a: string | number): void {
        this.roles.push(a);
        console.log(`Role added: ${a}`);
    }

    getRoles(): Array<string | number> {
        return this.roles;
    }


    merge<T extends number, B extends number, Output extends {
        a: T;
        b: B;
        sum: number;
    }>(a: T, b: B): Output {
          return { a, b, sum: a + b } as Output;
    }
}

var rolImp = new RoleImp();
console.log(rolImp.merge(2,2));