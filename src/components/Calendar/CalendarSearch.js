import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CalendarEvents from './CalendarEvents'

const CalendarSearch = () => {
const [string, setString] = useState('')
const [result, setRes] = useState([])


useEffect(()=> { 
        axios
        .get(`https://reqres.in/api/users?page=2`)
        .then(res => {
            console.log('card data', res.data.data)
            const search = res.data.data.filter(item => {
                return item.first_name.toLowerCase().includes(string.toLowerCase())
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
             <CalendarEvents key={data.id} event={data}/>
         ))}
      
    </div>
    )
}


export default CalendarSearch
