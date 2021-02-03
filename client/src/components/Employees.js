import React from 'react'

import {useState} from 'react';


import "../css/employees.css"

const Employers = () => {


  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [position, setPosition] = useState('')
  const [country, setCountry] = useState('')
  const [wage, setWage] = useState(0)
  


  const displayInfo = () => {
    console.log(name + age + position + country + wage)
  }

    return (

      
<div className="information__container">


       

        <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(event) => {setName(event.target.value)}} />

        <label>Age:</label>
        <input type="number" onChange={(event) => {setAge(event.target.value)}}  />

        <label>Position:</label>
        <input type="text" onChange={(event) => {setPosition(event.target.value)}} />

        <label>Country:</label>
        <input type="text" onChange={(event) => {setCountry(event.target.value)}} />

        <label>Wage:</label>
        <input type="number" onChange={(event) => {setWage(event.target.value)}} />

        <button onClick={displayInfo}>Add Employee</button>
      </div>
      </div>
    )
}

export default Employers
