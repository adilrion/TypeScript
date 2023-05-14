import cors from "cors";
import express, { Application } from 'express'; 
const app: Application = express()

// Application Route
import userRoute from './app/module/user/user.route'


app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({extends: true}));

app.use('/users', userRoute)


export default app;