import cors from "cors";
import express, { Application } from 'express'; 

// Application Route
import userRoute from './app/module/user/user.route'

const app: Application = express()
app.use(cors());
// app.use(express.urlencoded({extends: true}));

app.use('/api/v1/user', userRoute)


export default app;