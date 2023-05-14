import { IUser } from "./user.interface";
import User from "./user.model";

export const insertUserToDB = async (body: IUser): Promise<IUser> => {
    const user = await new User(body)

    await user.save().catch(err => console.log("🔴 Error: ", err));
    console.log("🟢 insert data: ", user);
    return user;
}

export const getUsersFromDB = async ()=>{
    const user = await User.find();
    return user;
}

