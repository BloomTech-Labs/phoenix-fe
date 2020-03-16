import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth.js';

const Login = () => {
    const [ values, setValues ] = useState({
        username: "",
        password: ""
    })

    let handleChange = e => {
        setValues({
            ...values, [e.target.name]: e.target.value
        })
    }

    let handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth().post('/auth/login', values)
        .then(res => {
            console.log('DATA: ', res.data)
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => console.log('ERROR MESSAGE', err.response))

        setValues({
            username: '',
            password: ''
        })
    }


    return (
    <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="username"
        placeholder="username"
        value={values.username}
        onChange={handleChange}
        />
        <input
        type="text"
        name="password"
        placeholder="you@yours.com"
        value={values.password}
        onChange={handleChange}
        />
        <button>Submit</button>
    </form>
    )
}

export default Login;