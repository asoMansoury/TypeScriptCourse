type BaseType = {
    type:"file" | "db";
}
type FileSource =BaseType & { path:string};
const fileSource:FileSource = {
    type:"file",
    path:'some/path/to/file.csc'
};

type DBSource = BaseType & {connectionUrl:string};
const dbSource:DBSource = {
    type:'db',
    connectionUrl:'some-connection-url'
};

type Source = FileSource | DBSource;


function loadData(source:Source){
    
    //typeguard technique
    if('path' in source){
       console.log( (source as FileSource).path);
    }else if ('connectionUrl' in source){
        console.log((source as DBSource).connectionUrl);
    }


    //second approach named discrminated Unions approach
    if(source.type == 'file'){
       console.log( (source as FileSource).path);
    }else if(source.type === 'db'){
       console.log((source as DBSource).connectionUrl);
    }
}