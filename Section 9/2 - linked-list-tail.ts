class ListNodeTail<T>{
    private values:Array<T> = [];
    next?:ListNodeTail<T>;
    constructor (public value:T){
        this.values.push(value);
    }

    getValues():Array<T>{
        return this.values;
    }
}

class LinkedListTail<T> {
    private root?:ListNodeTail<T>;
    private tail?:ListNodeTail<T>;
    private length:number = 0;

    add(value:T){
        const node = new ListNodeTail(value);
        if(!this.root){
            this.root = node;
            this.tail = node;
        }else{
            this.tail!.next = node;
            this.tail = node;
        }
        this.length++;
    }

    getNumberOfelements(){
        return this.length;
    }


    insertAt(value:T,pos:number){

    }

    remoteAt(pos:number){

    }


    printValues():void{
        if(this.root){
            this.root.getValues().map((item:any)=>{
                console.log(item);
            })
        }
    }

    print(){
        let current = this.root;
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}

const numberList=  new LinkedListTail<number>();
const nameList = new LinkedListTail<string>();
numberList.add(1);
nameList.add("aso");
nameList.add("mohsen");
nameList.add("reza");
console.log(nameList.getNumberOfelements());
nameList.print();
//nameList.printValues();



