import express, { Application, Request, Response, NextFunction } from 'express';
import { Schema } from 'mongoose';
import cors from "cors";


const app: Application = express()
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Mongoose server! ✌️✌️')

    // Create Interface
    interface IUser {
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
        gender:{
            type: String,
            required: true,
            enum: ['Male', 'Female']
        }
    });

})


export default app;