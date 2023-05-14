import { NextFunction, Request, Response } from 'express';
import { insertUser } from './user.service';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await insertUser()
    res.status(200).json({
        status: "success",
        data: user,
    });
};


export default createUser;