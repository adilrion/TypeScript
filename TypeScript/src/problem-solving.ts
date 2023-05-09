/* 

Problem 1: Functions and Default Parameters

Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3. 

*/

function problem1(params1: string, params2: number = 3): void {
    for (let index = 0; index < params2; index++) {
        console.log(params1);
    }
}

// problem1("without number");
// problem1("wit number", 10);
// ----------- end -------------- 


/* 

    Problem 2 🧨🧨
    Write a function that takes in an array of objects with properties name and age, and returns only the objects where the person's age is greater than or equal to 18,

*/

function problem2(params: any): void {
    params.map((data: any) => {
        if (data.age >= 18) {
            console.log(data);
        }
    })
}
type arrayObj = {
    name: string,
    age: number
}
const arrayObject: arrayObj[] = [{ name: 'abul', age: 13 }, { name: 'kabul', age: 22 }]

// problem2(arrayObject);
/* --------------------- */


/* 

    Problem 3:
    Create a TypeScript program that uses a generic function to reverse an array of strings, and takes a variable number of strings to the array using rest parameters. Provide an example of calling the function with a variable number of strings.


*/

const reverseArray = <T>(parameter: T[]): T[] => {
    return parameter.reverse();
}
console.log(reverseArray<string>(['adil', 'mahmoud', 'rion']));

const reverseArrayRestMathod = <T>(...param: T[]): T[] => {
    return reverseArray(param);
}
console.log(reverseArrayRestMathod<string[]>(['Hardin', 'Tessa', 'Iron Man']));
/* -------------------- */


/* 

    problem 4:
    Create a TypeScript class called Person that has private properties name and age, and a public method getDetails that returns a string with the person's name and age. Use parameter properties to define and initialize the properties in the constructor.

    Create a TypeScript class called Student that extends the Person class and has an additional private property grade. Define a public method getGrade that returns the student's grade. Use the super keyword to call the constructor of the Person class and initialize the name and age properties.

*/

class person {
    private name: string;
    private age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `this name: ${this.name}, age: ${this.age}`
    }
}
class Student extends person {
    private grade: string;
    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }
    getGrade(): string {
        return `Grade: ${this.grade}`;
    }
}

const objSupperClass = new Student('Rion', 2, 'C');
console.log(objSupperClass.getGrade());
const objSubClass = new Student('Adil', 23, 'A');
console.log(objSubClass.getDetails());
console.log(objSubClass.getGrade());
/* ---------------------------- */



/* 

    Problem - 5:
    ------------
    Create a TypeScript function that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.


*/

function problem5(params: unknown): void {

    if (typeof (params) == "string") {
        console.log('This is string');
    } else {
        console.log('there was an error!!');
    }

}
problem5(2);



/* 

    Problem - 6: Array and Tuple types

    Create a TypeScript program that declares an array of strings and a tuple of a number and a string. Add elements to both data structures, and log them to the console.

*/


const myStringArray: string[] = ['hardin', 'tessa'];
console.log(myStringArray);
myStringArray.push('Adil');
console.log(myStringArray);

const myArray: [number, string] = [10000000, 'adil'];
console.log(myArray);
myArray[0] = 200000;
console.log(myArray);
/* -------------------------- */

/* 
    Problem - 7: 
    -----------
    Create a TypeScript program that uses a conditional type to create a new type that is either a string or a number, depending on whether a parameter of type string or number is passed to the function.

    Then, create an interface for a person with properties name and age, and use the new type as a constraint on the age property.

    Finally, create an object that satisfies the Person interface and log it to the console.

*/


type TypeSelection<T> = T extends string ? string : number;
interface person7 {

    name7: string;
    age: TypeSelection<any>;
}
const obj7: person7 = {
    name7: 'Rion',
    age: 23,
}

console.log(obj7);
