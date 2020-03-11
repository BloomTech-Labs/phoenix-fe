import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'https://phoenix-be-staging.herokuapp.com',
        headers: {
            authorization: localStorage.getItem('token'),
            
        },
        
    })
}
