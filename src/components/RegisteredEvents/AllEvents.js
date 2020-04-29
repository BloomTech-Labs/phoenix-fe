import React, { useState, useEffect} from 'react' 
import Event from './EventCard'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';


const AllEvents = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        axios
        .get('https://phoenix-be-staging.herokuapp.com/api/calendar')
        .then(res => {
            setList(res.data)
        })
        .catch(err => console.log('err', err))
    }, [])

    return (
        <div style={{display: "flex",
            flexFlow: "column wrap",
            maxHeight: "100%",
            width: "100%",
            overflow: "auto",
            alignContent: "flex-start"
          }}>
            {list.map(item => (
                <Event id={item.event_id} active={item} />
            ))}

        </div>
            
    )
}

export default AllEvents
