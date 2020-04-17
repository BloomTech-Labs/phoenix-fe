import React, {useEffect, useState} from 'react'
import { auth } from '../../utils/axiosWithAuth'
import axios from 'axios'

const EventList = () => {
    const [eventData, setEventData] = useState([])
    
    let usetToken

    const token1 = localStorage.getItem('token')

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        usetToken = JSON.parse(jsonPayload)
    
        return usetToken;
    };

    parseJwt(token1)

    const userID = usetToken.id


    useEffect(()=> {
        axios
        .get('http://localhost:4400/api/attendees/spec2')
        .then(res => {
            console.log('res', res)
        })
        .catch(err => console.log('err', err))
    }, [])

    return (
        <div>
            print tesrt
            erm heller

        </div>
    )
}

export default EventList
