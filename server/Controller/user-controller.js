import { request, response } from 'express';
import User from '../Models/userSchema.js';

// login
export const userLogIn = async (request, response) => {
    const username= request.body.username;
    const password= request.body.password; 
    try {
        let user = await User.findOne({ username: username, password: password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}

// sinup
export const userSignUp = async (request, response) => {
    try {
        const exist = await User.findOne({ username: request.body.username });
        if(exist) {
            return response.status(401).json({ message: 'User already exist'});
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ mesage: user });        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}
