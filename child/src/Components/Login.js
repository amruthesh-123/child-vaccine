import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {

    const [username,setusername]= useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()

    const loginauth=async(e)=>{
        e.preventDefault();
            try {
            
              await axios.post('http://localhost:8000/login',{username,password}).then(res => 
                {
                  console.log(res);
                  if(res.data.status==="Success"){
    
                    localStorage.setItem('userid',res.data.id)
                   localStorage.setItem('token',res.data.token)
                    if(res.data.role==="admin"){
                      alert(res.data.status)
                      navigate('/adminpage')
                    }
                    else if(res.data.role==="Parent"){
                      alert(res.data.status)
                      navigate('/homepage')
                    }
                    else if(res.data.role==="healthcare"){
                      alert(res.data.status)
                      navigate('/healthhome')
                      
                    }
                  }else{
                    alert(res.data.status)
                  }
                })
              
            } catch (error) {
    
              console.error(error);
              
            }
          }

  return (
   
      <div class='log'>
<div class="login-box">
 
 <form>
   <div class="user-box">
     <input type="text" name="" required="" onChange={(e)=>setusername(e.target.value)}/>
     <label>Username</label>
   </div><br />
   <div class="user-box">
     <input type="password"  name="" required="" onChange={(e)=>setPassword(e.target.value)} />
     <label>Password</label>
   </div><center>
   <a href="#" onClick={loginauth}>
          Log In
      <span></span>
   </a></center>
 </form>
</div>
</div>
    
  )
}

export default Login
