import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CalendarEvents from './CalendarEvents'

const CalendarSearch = () => {
const [string, setString] = useState('')
const [result, setRes] = useState([])


useEffect(()=> { 
        axios
        .get(``)
        .then(res => {
            console.log('card data', res)
            const search = {res}.filter(item => {
                return item.title.toLowerCase().includes(string.toLowerCase())
        })
        setRes(search);})
        .catch(err => console.log('err', err))
    }, [string])

    const handleChange = e => {
        setString(e.target.value)
    }

    const handleSubmit = (e, {setQuery})=> {
        e.preventDefault()
        setQuery(e.target.value)
        format()
    }

    
    return (
        <div>
            <h3>Search for events</h3>
            <form>
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
      <CalendarEvents/>
    </div>
    )
}

export default CalendarSearch
