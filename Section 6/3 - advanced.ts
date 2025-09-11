class UserAdvanced {
    protected _firstName: string;
    protected age: number;

    set setFirstName(firstName: string) {
        this._firstName = firstName;
    }

    set setAge(age: number) {
        if (age < 0) {
            throw new Error("Age cannot be negative");
        }
        this.age = age;
    }


    get getFullName():string{
        return `${this._firstName} (${this.age})`;
    }


    //static properties and methods
    static eid = 12345;
    static getEmployeeDetails(){
        return {id: this.eid, name: "Employee Name"};
    }
}

const john = new UserAdvanced();
john.setFirstName = "John";
john.setAge = 30;
console.log(john.getFullName); // Output: "John (30)"


UserAdvanced.getEmployeeDetails();//Reading static method without creating an instance
UserAdvanced.eid;//Reading static property without creating an instance


//****************************************************************************************************************************************** */
//Inheritance
class Employee extends UserAdvanced{
    constructor(){
        super();//calling parent class constructor
    }

    getEmployeeInfo(){
        return `Employee Info: ${this.getFullName}`;
    }
}


abstract class UIElement{
    private _identifier:string;
    constructor(public identifier:string){

    }

    set setIdentifier(identifier:string){
        this._identifier = identifier;
    }

    get getIdentifier(){
        return this._identifier;
    }

    clone(targetLocation:string){
        
    }
}

class SideDrawerElement extends UIElement{
    constructor(public identifier:string,public position:'left' | 'right'){
        super(identifier);   
    }
}

