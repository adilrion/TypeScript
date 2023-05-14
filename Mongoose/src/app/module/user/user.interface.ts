export interface IUser {
    name: {
        firstName: string;
        lastName: string;
    }
    roll: number;
    address: {
        homeAddress: string;
        permanentAddress: string;
    },
    gender: "Male" | "Female";
}
