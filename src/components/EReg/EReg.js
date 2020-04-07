import React, {useState} from 'react';
import { withRouter } from 'react-router-dom'


const EReg = props => {


    const [user, setUser] = useState({

    })

    let usetToken

    const token1 = localStorage.getItem('token')

    console.log(token1)

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        usetToken = JSON.parse(jsonPayload)

        console.log(usetToken, 'look at me, im a parsed json payload')
    
        return usetToken;
    };

    parseJwt(token1)

    //    /api/user/:user_id/event/:event_id

    console.log(usetToken, 'look at me, im a parsed json payload')

    return(
        <>
        <a>A Thing! A button!</a>
        </>
    )


}



export default withRouter(EReg)