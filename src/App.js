import  { useEffect } from 'react'
import { useState } from 'react'
import Head from "./components/Header"
import Search from "./components/Search"
import Card from "./components/Countries"
import './App.css'

import ListItem from './components/Countries'


function App(){


   return (
    <div className="App">
      <Head/>
     <div className="container">
     <Search />
      
    
     </div>
    </div>
   ) 
}

export default App;



