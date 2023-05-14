import User from "./user.model";

export const insertUser = async () => {
    const user = await new User({
        name: {
            firstName: 'Hardin',
            lastName: 'scott'
        },
        roll: 35,
        address: {
            homeAddress: 'Chandpur',
            permanentAddress: 'Dhaka Bangladesh',
        },
        gender: 'Female',
    })

    await user.save().catch(err => console.log("🔴 Error: ", err));
    console.log("🟢 insert data: ", user);
    return user;
}

