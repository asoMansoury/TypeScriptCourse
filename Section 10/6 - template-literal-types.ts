const mainUserName = 'Max';
const greeting = `Hi there, ${mainUserName}`;

type ReadPermission = 'no-read' | 'read';
type WritePermission = 'no-write' | 'write';
// type FilePermission = 'no-read-write' | 'read-no-write' | 'read-write';
type FilePermission = `${ReadPermission}-${WritePermission}`;//template-literal-types
const filePermission1:FilePermission = 'read-write';

type DataFile = {
    data:string;
    permission:FilePermission;
}

type DataFileEventNames = `${keyof DataFile}Changed`;//"dataChanged" | "permissionChanged"
type DataFileEvents = {
    [key in DataFileEventNames]:()=>void;
}