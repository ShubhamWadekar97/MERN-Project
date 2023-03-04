import React,{useEffect} from 'react'
import  {useParams,useNavigate } from 'react-router-dom';

import axios from 'axios';

//useParams is responsible for selecting values from current url
//http://localhost:3000/delete/62e21143023f6e90c1c51c27
//<Route path="/delete/:idFromDatabase" element={<Deleterecord />} />

export default function DeleteStudent() {
    let navigate = useNavigate(); //after deletion redirect to show-record component
    let urldata = useParams(); //get values (id) from current url
    
    //{idFromDatabase:62e21143023f6e90c1c51c27}
    // console.log(urldata);
    let userid = urldata.id;
    // console.log(userid);
    //62e21143023f6e90c1c51c27

    var apiPath ='http://localhost:3500/students/'+userid;
    useEffect(()=>{
        console.log('perform delete');
        console.log(apiPath);

        axios
        .delete(apiPath)
        .then(res=>{
            console.log('RES FROM NODE JS');
            console.log(res);
            navigate('/getstudent');
        })

    } , []);
    return (
        <></>
    )
}
