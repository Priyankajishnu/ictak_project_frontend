
import React,{useState,useEffect} from 'react';
import employeeupdate from './Employeedb';
import './EmployeeUpdateform.css';

function EmployeeUpdateform(props) {

    // const [data,setData]=useState([]);

    // useEffect(async()=>{
    //     let result= await fetch('http://localhost:3000/emp-update' +props.params.match.empname );
    //    let response = await result.json();
    //     setData(response);
    // })
  return (
    <div>
      <div className='empform'>
        <h1 style={{marginTop:'8px'}} >Edit Details</h1>
        {employeeupdate.map((i,key)=>(
            <>
            <input type="text" placeholder='empname' value={i.empname}/> <br /><br />
            <input type="text" placeholder='role' value={i.role}/> <br /><br />
            <input type="text" placeholder='emailid' value={i.emailid}/> <br /><br />
            
            <button className='update'>UPDATE</button> <br /><br />
            </>
        ))}
      </div>
    </div>
  )
}

export default EmployeeUpdateform;