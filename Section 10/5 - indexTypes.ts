type DataSource = {
    [prop:string]:boolean | number;
}

//define an object like above by using Record feature.
let someObj: Record<string,boolean>;


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

 dataEntries.entry3;//error at running ans will say undefined, this approach is more dynamic

const dataEntries2 = {
    entry1:0.51,
    entry2:-1.23
 } satisfies Record<string,number>;


 dataEntries2.entry3;//By using satisfies , compiler doesnt allow to use a property which hasn't been defined and this one is more secure
