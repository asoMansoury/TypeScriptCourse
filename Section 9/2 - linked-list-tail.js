var ListNodeTail = /** @class */ (function () {
    function ListNodeTail(value) {
        this.value = value;
        this.values = [];
        this.values.push(value);
    }
    ListNodeTail.prototype.getValues = function () {
        return this.values;
    };
    return ListNodeTail;
}());
var LinkedListTail = /** @class */ (function () {
    function LinkedListTail() {
        this.length = 0;
    }
    LinkedListTail.prototype.add = function (value) {
        var node = new ListNodeTail(value);
        if (!this.root) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    };
    LinkedListTail.prototype.getNumberOfelements = function () {
        return this.length;
    };
    LinkedListTail.prototype.printValues = function () {
        if (this.root) {
            this.root.getValues().map(function (item) {
                console.log(item);
            });
        }
    };
    LinkedListTail.prototype.print = function () {
        var current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedListTail;
}());
var numberList = new LinkedListTail();
var nameList = new LinkedListTail();
numberList.add(1);
nameList.add("aso");
nameList.add("mohsen");
nameList.add("reza");
console.log(nameList.getNumberOfelements());
nameList.print();
//nameList.printValues();
