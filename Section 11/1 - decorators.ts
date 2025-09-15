function logger<T extends new (...args:any[]) => any>(target:T,ctx:ClassDecoratorContext){
    console.log('Logging...');
    console.log(target);
    console.log({ctx});

    var newclass = class extends target{
        constructor(...args:any[]){
            super(...args);
            console.log('Creating new instance');
            console.log(this);
        }
        age = 35;

        greet2(){
            console.log('Hello, I am ' + this.name + ' and I am ' + this.age + ' years old.');
        }
    }

    return newclass;
}

function autobind(target:(...args:any[])=>any,ctx:ClassMethodDecoratorContext){
    ctx.addInitializer(function(this:any){
        this[ctx.name] = this[ctx.name].bind(this);
    });

    return function(this:any, ...args:any[]){
        console.log('Auto binding...');
        target();//execute original method, check the console log of greet method to see the difference , this keyword will be undefined.
        target.apply(this,args);//execute original method with original context and arguments
    }
}

function replacer(val:string){

    return function replacerDecorator(target:undefined,ctx:ClassFieldDecoratorContext){
                console.log('Field decorator!');
                console.log(target);
                console.log(ctx);

                return (initialValue:any) => {
                    console.log('Initial value: ' + initialValue);
                    return val;
                }
    }

}



@logger
class Person {
    // constructor(){
    //     this.greet = this.greet.bind(this);
    // }

    @replacer('Test')
    name = 'Max';

    @autobind
    greet(){
        console.log('Hi, I am ' + this.name);
    }
}

const pers = new Person();
const julie = new Person();
const greet = pers.greet;
greet();
