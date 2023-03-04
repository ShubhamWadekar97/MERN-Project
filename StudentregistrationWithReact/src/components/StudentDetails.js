import React,{useState,useEffect} from 'react'

import {Link} from 'react-router-dom';

import axios from 'axios';

function StudentDetails(){

    const[api,setApi] = useState([]);

    var apiPath ='http://localhost:3500/students';
    useEffect(()=>{
        console.log('use effect called');

        axios
        .get(apiPath)
        .then(res=>{
            // console.log(res);
            console.log(res.data.msg);
            setApi(res.data.msg);
        });

    } ,[]);

    return(
        <div className='container'>     
        <h1 >Student Details</h1>
      
       <table class="table">
       <thead>
    <tr>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Mobile</th>
      <th scope="col">Age</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
    </tr>
  </thead>

            
            {api &&api.map((obj) => (
                <tbody >
                    <td>{obj.FirstName}</td>
                    <td>{obj.LastName}</td>
                    <td>{obj.Email}</td>
                    <td>{obj.Address}</td>
                    <td>{obj.Mobile}</td>
                    <td>{obj.Age}</td>
                    <td><Link to={'/deletestudent/'+obj._id}class="nav-link" ><button type="button" class="btn btn-danger">Delete</button></Link></td>
                 <td><Link to={"/updatestudent/"+obj._id} class="nav-link" ><button type="button" class="btn btn-warning">Edit</button></Link></td>
                    </tbody>
            ))}
        
        </table>
      </div>
    )
}
export default StudentDetails;
