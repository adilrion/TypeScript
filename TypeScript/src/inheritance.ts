class parentClass{
    name: string;
    age: number;
    university: string;

    constructor(name: string, age: number, university: string){
        this.name = name;
        this.age = age;
        this.university = university;
    }

    parentOutPut(){
        console.log(`Name: ${this.name} \nAge: ${this.age} \nUniversity${this.university}`);
    }
}


class child extends parentClass{
    constructor(name: string, age: number, university: string){
        super(name, age, university);
    }
}


const childClass = new child('Rion', 23, 'DIU')
childClass.parentOutPut();
