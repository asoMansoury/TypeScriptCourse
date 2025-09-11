class ListNode<T>{
    private values:Array<T> = [];
    next?:ListNode<T>;
    constructor (public value:T){
        this.values.push(value);
    }

    getValues():Array<T>{
        return this.values;
    }
}

class LinkedList<T> {
    private root?:ListNode<T>;
    private tail?:ListNode<T>;
    private length:number = 0;

    add(value:T){
        const node = new ListNode(value);
        if(!this.root){
            this.root = node;
        }else{
            let current = this.root;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    printValues():void{
        if(this.root){
            this.root.getValues().map((item:any)=>{
                console.log(item);
            })
        }

    }
}

const numberList=  new LinkedList<number>();
const nameList = new LinkedList<string>();
numberList.add(1);
nameList.add("aso");
nameList.add("mohsen");
nameList.add("reza");
nameList.printValues();



