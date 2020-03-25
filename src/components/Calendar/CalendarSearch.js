import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Event from './Event'

const CalendarSearch = () => {
const [string, setString] = useState('')
const [result, setRes] = useState([])


useEffect(()=> { 
        axios
        .get(`https://phoenix-be-staging.herokuapp.com/api/calendar`)
        .then(res => {
            console.log('card data', res.data)
            const search = res.data.filter(item => {
                return item.summary.toLowerCase().includes(string.toLowerCase())
        })
        setRes(search);})
        .catch(err => console.log('err', err))
    }, [string])

    //in return change to what we want to filter

    const handleChange = e => {
        setString(e.target.value)
    }

    const handleSubmit = (e, {setRes})=> {
        e.preventDefault()
        setRes(e.target.value)
    }

    
    return (
        <div>
            <h3>Search for events</h3>
            <form onSubmit={handleSubmit}>
            <input 
              className="searchInput"
              onChange={handleChange}
              type="text" 
              name="search"
              placeholder="Search"
              autoComplete="off"
              />
             <button type='submit'>Submit</button>
         </form>
         {result.map(data => (
             <Event key={data.id} event={data}/>
         ))}
      
    </div>
    )
}


export default CalendarSearch
