/* 

Problem 1: Functions and Default Parameters

Create a TypeScript program that declares a function that takes two parameters, a string and a number. The function should log the string parameter repeated the number of times specified by the number parameter. If the number parameter is not provided, it should default to 3. 

*/

function problem1(params1: string, params2: number = 3): void {

    for (let index = 0; index < params2; index++) {
        console.log(params1);
    }

}

problem1("without number");
problem1("wit number", 10);