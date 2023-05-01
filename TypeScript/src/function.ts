/* Normal Function */
// "noImplicitAny": false,
function NormalFunction(num1, num2) {
    return num1 + num2;
}
NormalFunction(12, 12);
NormalFunction("you", "to");


function typeFunction(num1:number, num2:number) {
    return num1 + num2;
}
 const result = typeFunction(12, 42);
// typeFunction('adil', 'mahmoud');  -> we get error

/* In this function we set return type as a number */
function typeFunctionReturnType(num1:number, num2:number):number {
    return num1 + num2;
}


/* Array Function */
const arrayFunction=(num1:number, num2:number): number => num1+num2;
// console.log(arrayFunction(23,53));


/* Spread operator */
const mainArray = ['amin', 'jamin', 'kamin', 'kuddus'];
const subArray = ['sabu', 'jabu', 'kodu'];

mainArray.push(...subArray);

/* rest operator */

const restOperator = (...data: string[]):void => console.log(data);
// restOperator( "jamu", "khamu", "gumamu")
const restOperatorForEach = (...data: string[]): void => data.forEach((data)=>console.log(`hi ${data}`));
restOperatorForEach( "bangla bhai", "khamu", "gumamu")


/* object sperate operator */
const SpreadOp = ['kodu', 'sodu','lodu', 'jodu'];
const spObject = {
    fullName: "adil",
    age: 23,
}

const {fullName: spName} = spObject;
console.log("🚀 ~ file: function.ts:49 ~ spName:", spName)
