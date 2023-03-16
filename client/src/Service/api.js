import axios from 'axios';

const url = 'http://localhost:8000';

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${url}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/signup`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
        return error.response;
    }
}
export const getProducts = async () => {
    try{
        return await axios.get(`${url}`);
    } catch(err) {
        console.log("Error to Get Data : ", err);
    }
};

export const getProduct = async (id) => {
    try{
        return await axios.get(`${url}/product/${id}`);
    } catch(err) {
        console.log("Error to Get Data : ", err);
    }
};