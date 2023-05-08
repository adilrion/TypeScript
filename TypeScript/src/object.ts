class newObj {
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    outPut() {
        console.log(`My name is ${this.name}, i'm ${this.age}, from ${this.address}`);
    }
}

const obj2 = new newObj("rion", 12, "paduarpar");
obj2.outPut();


// another way to create object
class newObj2 {
    constructor(
        public name: string,
        public age: number,
        public address: string) { }
    outPut() {
        console.log(`My name is ${this.name}, i'm ${this.age}, from ${this.address}`);
    }
}
