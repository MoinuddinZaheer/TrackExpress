import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerList = () => {
  const [location,setLocation]=useState({})
  const navigate=useNavigate()

  const customerList=JSON.parse(localStorage.getItem("customer"))

  const list= customerList.map((cust,ind)=>{
return(
<tr key={ind}>
  <td scope="col">{ind+1}</td>
  <td scope="col">{cust.name}</td>
  <td scope="col">{cust.phone}</td>
  <td scope="col">{cust.location.lat}-{cust.location.lng}</td>
  <td scope="col"><button className='btn btn-primary' onClick={()=>setLocation(cust.location)}>Open Map</button></td>
</tr> )
})

  return (
    <div className="table-responsive container">
      <div className='my-3'>
        <iframe src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d498018.09658709046!2d${location.lat}!3d${location.lng}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150bb1cba01b%3A0xe1927d2d346c93dd!2sMinar%20Masjid!5e0!3m2!1sen!2sin!4v1686504690978!5m2!1sen!2sin`} width="600" height="450" allowfullscreen=""
    loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    <div className="d-flex">
    <h2>Customer list</h2>
    <button className='btn btn-primary ms-auto' onClick={()=>navigate("/add")}>Add Customer</button>
    </div>
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <td scope="col">#</td>
          <td scope="col">Name</td>
          <td scope="col">Number</td>
          <td scope="col">location</td>
          <td scope="col">Action</td>

        </tr>
      </thead>
      <tbody>
         {list}
      </tbody>
    </table>
  </div>
  );
};

export default CustomerList;

