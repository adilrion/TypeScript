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

const arryObject: arrayObj[] = [{ name: 'abul', age: 13 }, { name: 'kabul', age: 22 }]

problem2(arryObject);