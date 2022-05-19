import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const Viewcourse = () => {
    var [courselist,setcourselist]=useState([])
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then((response)=>{
        console.log(response.data)
        setcourselist(response.data)
    })
  return (
    <div>
    <Header/>
    <div class="container">
    <div class="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div class="row">
            
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table table-success">
  <thead>
    <tr>
      <th scope="col">COURSE TITLE</th>
      <th scope="col">COURSE DURATION</th>
      <th scope="col">COURSE DESCRIPTION</th>
      <th scope="col">COURSE VENUE</th>
      <th scope="col">COURSE DATE</th>
    </tr>
  </thead>
  <tbody>
      {courselist.map((value,key)=>{return<tr>
    
     
      <td>{value.courseTitle}</td>
      <td>{value.courseDuration}</td>
      <td>{value.courseDescription}</td>
      <td>{value.courseVenue}</td>
      <td>{value.courseDate}</td>
    </tr>
    })}
  </tbody>
</table> 
             
            </div>
           
        </div>
    </div>
</div>


    </div>
  )
}

export default Viewcourse