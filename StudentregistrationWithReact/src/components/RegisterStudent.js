import React,{useRef,useEffect} from 'react'
import axios from 'axios';
 //hold textbox values in x1,x2 ref variable
 import { useNavigate } from "react-router-dom";
function RegisterStudent(){

    let navigate=useNavigate();
    var fname = useRef();
    var lname = useRef();
    var email = useRef();
    var address = useRef();
    var mob = useRef();
    var age = useRef();

    var add = ()=>{
        console.log('TEST');

        // console.log(x1);
        // console.log(x2);
        // received values from textboxes using ref variable
        console.log(fname.current.value);
        console.log(lname.current.value);
        console.log(email.current.value);
        console.log(address.current.value);
        console.log(mob.current.value);
        console.log(age.current.value);

        var record = {
            FirstName: fname.current.value,
            LastName: lname.current.value,
            Address: address.current.value,
            Email: email.current.value,
            Mobile: mob.current.value,
            Age: age.current.value
        }
        console.log(record);
        var apiPath = 'http://localhost:3500/students';

        //perform post method for insertion operation
        axios
        .post(apiPath,record)
        .then(res=>{
            console.log("res From Node Js");
            console.log(res);

            //redirect to /show-user after success
            navigate("/getstudent");
        })
    }
    return(
        <div className='container'>
        <h1>Add Student</h1>

        <input type="text" ref={fname} className='form-control' placeholder='First Name' /> <br />
        <input type="text"  ref={lname} className='form-control'placeholder='Last Name' /> <br />
        <input type="text" ref={email} className='form-control'placeholder='Email' /> <br />
        <input type="text" ref={address} className='form-control' placeholder='Address' /> <br />
        <input type="text"  ref={mob}className='form-control'placeholder='Mobile' /> <br />
        <input type="text" ref={age}  className='form-control' placeholder='Age' /> <br />
       <button onClick={add}> Add </button>
    </div>
    )
}
export default RegisterStudent;