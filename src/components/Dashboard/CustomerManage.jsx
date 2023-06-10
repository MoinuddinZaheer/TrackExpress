import React, { useState } from 'react'

const CustomerManage = () => {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [location,setLocation]=useState({})

    const handleLogin=()=>{

    }

  return (
    <>
      <div className='container'>
      <form onSubmit={handleLogin}>
    <h1 className="h3 mb-3 fw-normal">Add the Customer</h1>

    <div className="form-floating mb-2">
      <input type="Number" value={name} className="form-control" id="floatingInput" placeholder="Enter Customer Name" onChange={(e)=>setName(e.target.value)}/>
      <label forHtml="floatingInput">Name</label>
    </div>
    <div className="form-floating mb-2">
      <input type="Number" maxLength="10" value={phone} className="form-control" id="floatingInput" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
      <label forHtml="floatingInput">Phone Number</label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    </form>
      </div>
    </>
  )
}

export default CustomerManage
