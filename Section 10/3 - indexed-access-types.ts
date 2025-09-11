type AppUser = {
    name: string;
    age: number;
    permission:{
        id:string;
        title:string;
        description:string;
    }[]
}

const appuUser ={
    name: 'Max',
    age: 30,
    permission:[
        {
            id:'p1', 
            title:'admin',
            description:'admin access'
        }
    ]
}

type AppUserType = typeof appuUser;

type PermsType = AppUserType['permission'];
type Perm = PermsType[number];// it is like PermsType[0 | 1 | 2 | ...]
type PermTitle = Perm['title'];

//-----------------------------------------------------
type Names =string[];
type name = Names[number];