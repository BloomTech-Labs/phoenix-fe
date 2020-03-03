import React, {useState, useEffect} from 'react'
import axios from 'axios'
//useDispatch from react redux for state management

const CalendarSearch = () => {
const [query, setQuery] = useState('')
const [string, setString] = useState('')
const [result, setRes] = useState({})

const format = (query) => {
    let str = `${query.toLowerCase()}`
    const valid = str.replace(/[.,\/#!$%\^&\*;:{}=\-_?`~()]/g," ")
    let split = valid.split(' ')
    let search = `?={'${split}': {'$exists': true}}`
    return search
}

    useEffect(()=> {
        
        axios
        .get(``,  {
            headers: "AIzaSyCg5SCLEp8z0aGTxbQ0DkufSlZhuhTpEVo"
          })
        .then(res => {
            console.log('res.data', res.data)
        })
        .catch(err => console.log('err', err))
    }, [format])

    const handleChange = e => {
        setQuery(e.target.value)
        console.log('query set via form', query)
    }

    const handleSubmit = (e, {setQuery})=> {
        e.preventDefault()
        setQuery(e.target.value)
        format()
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                 className="searchInput"
                onChange={handleChange}
                type="text"
                name="search"
                placeholder="Search for Event Name"
                name="name"
                autoComplete="off"
             />
             <button type='submit'>Submit</button>
      </form>
      <div>Results displayed on card</div>
        </div>
    )
}

export default CalendarSearch
