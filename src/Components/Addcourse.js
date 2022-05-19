import React, { useState } from 'react'
import Header from './Header'

const Addcourse = () => {
    var [courseTitle,setcoursetitle]=useState("")
    var [courseDuration,setduration]=useState("")
    var [courseDescription,setdescription]=useState("")
    var [courseVenue,setvenue]=useState("")
    var [courseDate,setdate]=useState("")
    const subdata=()=>{
        const data={"courseTitle":courseTitle,"courseDuration":courseDuration,"courseDescription":courseDescription,"courseVenue":courseVenue,"courseDate":courseDate}
        console.log(data)
    }
  return (
    <div>
        <Header/>
<div className="container">
    <div className="row div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label for="" className="form-label">Course Title</label>
              <input onChange={(c)=>{setcoursetitle(c.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Duration</label>
                <input onChange={(c)=>{setduration(c.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" className="form-label">Description</label>
                <textarea onChange={(c)=>{setdescription(c.target.value)}} name="" id="" cols="30" rows="10" className="form-control"></textarea>
               
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Venue</label>
                <input onChange={(c)=>{setvenue(c.target.value)}} type="text" className="form-control"/>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" className="form-label">Date</label>
                <input onChange={(c)=>{setdate(c.target.value)}} type="date" name="" id=""className="form-control"/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button onClick={subdata} className="btn btn-success">REGISTER</button>

            </div>
        </div>
    </div>
</div>



    </div>
  )
}

export default Addcourse