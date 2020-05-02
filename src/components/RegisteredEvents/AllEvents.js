import React, { useState, useEffect} from 'react' 
import Event from '../Calendar/CalComponents/Event'
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
       <Grid container spacing={1}>
           {list.map(item => (
               <Event id={item.event_id} event={item} sm={6} md={4} xs={12}/>
           ))}

       </Grid>

            
    )
}

export default AllEvents
