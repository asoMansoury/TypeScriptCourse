type FileData = {
    path:string;
    content:string;

}

type  DatabaseData = {
    connectionUrl:string;
    credentials:string;
}

type Status = {
    isOpen:boolean;
    errorMessage?:string;
};

type  AccessedFileData = FileData & Status & {

}

type AccessedDatabaseData = DatabaseData & Status & {

}



///Equivalent concept by leveraging interfaces 
interface IFileData  {
    path:string;
    content:string;

}

interface  IDatabaseData  {
    connectionUrl:string;
    credentials:string;
}

interface IStatus {
    isOpen:boolean;
    errorMessage?:string;
};

//type IAccessedFileData= IDatabaseData & IStatus;
interface IAccessedFileData extends IFileData, IStatus{};

//type IAccessedDatabaseData = IDatabaseData & IStatus &{}
interface IAccessedDatabaseData extends IDatabaseData , IStatus {}