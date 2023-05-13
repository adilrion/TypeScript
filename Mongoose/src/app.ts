import express, { Application, Request, Response, NextFunction } from 'express';
import cors from "cors";


const app: Application = express()
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('Mongoose server! ✌️✌️')
    next();
})


export default app;