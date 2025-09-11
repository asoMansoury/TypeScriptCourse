function add1(a:number,b=2):number {
    return a + b;
}


function log(message:string):void {
    console.log(message);
}

//never type function example
function logAndThrow(errorMessage:string):never | number{
    if(errorMessage === ''){
        return 0;
    }
    throw new Error(errorMessage);
}
const logged = logAndThrow('An error occurred!');

// function with callback
function performJob(job:()=>number):number{
    return job();
}

function performJobWithArgs(jobFunc:(a:number,b:number)=>number,arg1:number,arg2:number):never|number{
    if(typeof jobFunc !== 'function'){
        throw new Error('jobFunc must be a function');
    }
    let result = jobFunc(arg1,arg2);
    if(result < 0)
        throw new Error('Result must be a positive number');
    return result;
}


