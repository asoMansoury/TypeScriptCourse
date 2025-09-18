type DataSource = {
    [prop:string]:boolean | number;
}

//define an object like above by using Record feature.
let someObj: Record<string,boolean>;
someObj = {
    "isOpen":true,
    IsActive:false
};
let record:Record<number,boolean>;
record = {
    2:false,
    3:true
};


let store:DataSource = {};

store.id = 5;
store.isOpen = false;

//make array as readonly
const roles = ['admin','guest','editor'] as const;

//Without satisfies and using satisfies
const dataEntries: Record<string,number>={
    entry1:0.51,
    entry2:-1.23
 }

 //entry3 is not defined in dataEntries but compiler doesn't complain
 //but at runtime, it will be undefined
 dataEntries.entry3;//error at running and will say undefined, this approach is more dynamic

const dataEntries2 = {
    entry1:0.51,
    entry2:-1.23
 } satisfies Record<string,number>;


 //dataEntries2.entry3 = -1; //By using satisfies , compiler doesnt allow to use a property which hasn't been defined and this one is more secure

 const dd = {
    entry1:false,
    entry2:-1.23//error because entry1 is boolean and entry2 is number

 } satisfies typeof someObj;

 dataEntries2.entry3;//By using satisfies , compiler doesnt allow to use a property which hasn't been defined and this one is more secure
