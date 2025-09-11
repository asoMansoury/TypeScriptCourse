type StringArray = string[];
type ElementType = StringArray[number];//indexed-access-types

type ElementTypeGeneric<T extends any[]> = T[number];
type Example1 = ElementTypeGeneric<StringArray>;

let text ="Hello";
//type example2 = ElementTypeGeneric<typeof text>;//let text2 = 'hello';
//type example3 = ElementTypeGeneric<typeof text2>; // error


//to resolve above problem we can use conditional types
type GetElementType<T> = T extends any[] ? T[number] : T;
type example4 = GetElementType<typeof text>;

///Another example for conditional types
type FullNamePerson = {
    firstName:string;
    lastName:string;
}
type FullNameOrNothing<T>  = T extends FullNamePerson ? string : never; 
function getFullName<T extends object>(obj:T): FullNameOrNothing<T>{
    if(
        obj['firstName'] &&
        obj['lastName']
    ){
        return `${obj['firstName']} ${obj['lastName']}` as FullNameOrNothing<T>;
    }

    throw new Error("firstName or lastName not found");
}

const sample1 = getFullName({});
const sample2 = getFullName({firstName:'Aso',lastName:'Mohsen'});
console.log(sample2);
//const sample3 = getFullName({firstName:'Aso',age:30}); // error
const sample4 = getFullName({"firstName":'Aso',"lastName":'Mohsen',"age":30});
console.log(sample4);   