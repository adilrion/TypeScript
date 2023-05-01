/* Explosive type object */
const myObj = {
  name: "adil",
  university: "Dhaka International University",
  address: "Dhaka Bangladesh",
};

/* Another way to declare object */
const typeObj: {
  name: string;
  university: string;
  roll: number;
} = {
  name: "rion",
  university: "Dhaka International university",
  roll: 23,
};

/* Optional Object declaration */

const optionalObjectChaining: {
  name: string;
  university: string;
  roll?: number;
} = {
  name: "rion",
  university: "Dhaka International university",
};

/* another one */
const newArray: {
  name: string;
  university: "Dhaka International university";
  roll?: number;
} = {
  name: "rion",
  university: "Dhaka International university",
};
 

const readOnlyArray: {
    readonly name: string;
    university: "Dhaka International university";
    roll?: number;
  } = {
    name: "rion",
    university: "Dhaka International university",
  };

//   readOnlyArray.name = "sas"