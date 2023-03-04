import React,{useEffect,useState,useRef} from 'react'
import  {useParams,useNavigate } from 'react-router-dom';

import axios from 'axios';

function EditStudent(){

    let navigate=useNavigate();

    const[fname,setFname] = useState('');
  const[lname,setLname] = useState('');
  const[email,setEmail] = useState('');
  const[address,setAddress] = useState('');
  const[mob,setMob] = useState('');
  const[age,setAge] = useState('');
  let params = useParams();
  console.log(params); //{idFromDatabase:21jk3h123h1h3212}

  var userid = params.id;
  console.log(userid);

  useEffect(()=>{
    var apiPath = 'http://localhost:3500/students/'+userid;
    console.log(apiPath);

    axios
    .get(apiPath)
    .then(res=>{
      // console.log('response fromnode');
      // console.log(res.data);
      console.log(res.data.msg); //

      setFname(res.data.msg.FirstName)
      setLname(res.data.msg.LastName)
      setEmail(res.data.msg.Email)
      setAddress(res.data.msg.Address)
      setMob(res.data.msg.Mobile)
      setAge(res.data.msg.Age)
    })

  },[]);

  var update = ()=>{

    var data = {
        FirstName: fname,
        LastName: lname,
        Address: address,
        Email: email,
        Mobile: mob,
        Age: age
    }

    console.log(data);
    var apiPath = 'http://localhost:3500/students/'+userid;
    console.log(apiPath);

    axios
    .put(apiPath , data)
    .then(res=>{
      console.log('ResAfter Update');
      console.log(res);
      //
      navigate('/getstudent');
    })

  }
    return(
        <div className='container'>
        <h1>Edit Student</h1>

        <input type="text"value={fname} onChange={(e)=>{ setFname(e.target.value) }} className='form-control' placeholder='First Name' /> <br />
        <input type="text" value={lname} onChange={(e)=>{ setLname(e.target.value) }} className='form-control'placeholder='Last Name' /> <br />
        <input type="text" value={email} onChange={(e)=>{ setEmail(e.target.value) }} className='form-control'placeholder='Email' /> <br />
        <input type="text"value={address} onChange={(e)=>{ setAddress(e.target.value) }} className='form-control' placeholder='Address' /> <br />
        <input type="text"  value={mob} onChange={(e)=>{ setMob(e.target.value) }}className='form-control'placeholder='Mobile' /> <br />
        <input type="text"value={age} onChange={(e)=>{ setAge(e.target.value) }} className='form-control' placeholder='Age' /> <br />
       <button onClick={update}> Update</button>
    </div>
    )
}
export default EditStudent;