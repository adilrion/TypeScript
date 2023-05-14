import { NextFunction, Request, Response } from 'express';
import { getUsersFromDB, insertUserToDB } from './user.service';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    const createNewUser = req.body;
    const user = await insertUserToDB(createNewUser)
    res.status(200).json({
        status: "success",
        data: user,
    });
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    const user = await getUsersFromDB()
    res.status(200).json({
        status: "success",
        data: user,
    });
};

