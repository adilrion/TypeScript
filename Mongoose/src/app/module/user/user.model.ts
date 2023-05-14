import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

// Create Schema
const userSchema = new Schema<IUser>({
    name: {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        }
    },
    roll: {
        type: Number,
        required: true,
        unique: true


    },
    address: {
        homeAddress: {
            type: String,
            required: true
        },
        permanentAddress: {
            type: String,
            required: true
        }
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female']
    }
});

// create a model
const User = model<IUser>('User', userSchema);

export default User;