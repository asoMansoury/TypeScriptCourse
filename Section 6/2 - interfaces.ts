interface IAuthenticatable{
    email:string;
    password:string;

    login():void;
    logout():void;
}

//First approach to implementi interfaces
let user:IAuthenticatable;

user = {
    email:"aso.mansoury@gmail.com",
    password:'1234',
    login() {
        
    },
    logout() {
        
    },
}


//Second approach to implementi interfaces
class Authenticatable implements IAuthenticatable{
    constructor(public email:string,public password:string){

    }

    
    login() {
        console.log("Login...")
        console.log(this.email,this.password);
    };
    logout() {
        console.log("Logout...")
        console.log(this.email,this.password);
    };
}
var impAuthentication:IAuthenticatable = new Authenticatable("aso","1234");
impAuthentication.login();
impAuthentication.logout();


