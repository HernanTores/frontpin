import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/',    
})

const sendEmail = async (data) => {
    const response = await instance({
        method: 'post',
        url: 'v1',
        data: data
    })
    return response
}

export {
    sendEmail
}