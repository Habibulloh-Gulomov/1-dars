import ListItem from './Countries'
import  { useEffect } from 'react'
import { useState } from "react"
import "./search.css"
let Search = () => {
  
  let [value, setvaue]= useState("")

  
  const [todos,setTodos] = useState([])

  

  return(
      <div className="search__cover">
        <form  className="form">
          <input onChange={((evt) => fetch (`https://restcountries.com/v3.1/name/${evt.target.value}`)
          .then ((res) => res.json())
          .then ((data) => setTodos([...data]))
          .catch((err) => console.log('error')) )}className="input" name="search" placeholder="Search for a country…"/>

          
          <select className="select" onChange={((evt) => (
            fetch (`https://restcountries.com/v3.1/region/${evt.target.value}`)
            .then ((res) => res.json())
            .then ((data) => setTodos([...data]))
            .catch((err) => console.log('error2'))
          ) )}>
            <option className="option" >Filter by Region</option>
            <option className="option">Africa</option>
            <option className="option">America</option>
            <option className="option">Europe</option>
            <option className="option">Asia</option>
            <option className="option">Oceania</option>
          </select>
        </form>

        <ul className='list'>
      {
      todos.map(el =>(
        <ListItem name={el} key={el.name.common}/>
      ))
    }
      </ul>
      </div>
  )
}

export default Search