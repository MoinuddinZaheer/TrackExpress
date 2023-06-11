import React, { useState } from 'react'

const CustomerManage = () => {
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [location,setLocation]=useState({})

    const [customers,setCustomers]=useState(localStorage.getItem("customer")||[])

  const handleRegister=(e)=>{
    e.preventDefault()
   if(name&&phone&&location){
    const customer={name:name,phone:phone,location:location}
    setCustomers([...customers,customer])
    localStorage.setItem("customer",JSON.stringify(customers))
   }
  }

  return (
    <>
      <div className='container'>
      <form onSubmit={handleRegister}>
    <h1 className="h3 mb-3 fw-normal">Add the Customer</h1>

    <div className="form-floating mb-2">
      <input type="text" value={name} className="form-control" id="floatingInput" placeholder="Enter Customer Name" onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="floatingInput">Name</label>
    </div>
    <div className="form-floating mb-2">
      <input type="Number" maxLength="10" value={phone} className="form-control" id="floatingInput" placeholder="Phone Number" onChange={(e)=>setPhone(e.target.value)}/>
      <label htmlFor="floatingInput">Phone Number</label>
    </div>
    <div className="form-floating mb-2">
      <input type="Number" maxLength="10" value={location.lat} className="form-control" id="floatingInput" placeholder="Phone Number" onChange={(e)=>setLocation({lat:e.target.value})}/>
      <label htmlFor="floatingInput">lattitude</label>
    </div>
    <div className="form-floating mb-2">
      <input type="Number" maxLength="10" value={location.lng} className="form-control" id="floatingInput" placeholder="Phone Number" onChange={(e)=>setLocation({lng:e.target.value})}/>
      <label htmlFor="floatingInput">longitude</label>
    </div>
    <button className="btn btn-primary w-100 py-2" type="submit">Add Customer</button>
    </form>
      </div>
    </>
  )
}

export default CustomerManage
