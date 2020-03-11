import axios from 'axios';

export const axiosWithAuth = () => {
    return axios.create({
        baseURL: 'phoenix-fe-staging.herokuapp.com',
        headers: {
            authorization: localStorage.getItem('token'),
            
        },
        
    })
}
