import React, { useContext, useState } from 'react'
import { Context } from '../main';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const { isAuthenticated, setIsAuthenticated} = useContext(Context);
  const [email, setEmail]=useState("");
  const [password, setpassword]=useState("");
  const [confirmPassword, setconfirmPassword]=useState("");

  const NavigateTo = useNavigate();

  const handlelogin = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        {email, password, confirmPassword, role:"Patient"},
        {
        withCredentials :true,
        header:{ "content-type":"application/json"},
      }
      );
      toast.success(response.data.message);
      setIsAuthenticated(true);
      NavigateTo("/");

    }catch(error) {
      toast.error(error.response.data.message);

    }
  };

  if(isAuthenticated){
    return <Navigate to ={"/"} />;
  }

  return <div className='container form-component login-form'>
    <h2>Sing In</h2>
    <p>Plese login to contiue</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, quas.</p>
    <form onSubmit={handlelogin}>

      <input type = "text" 
      value={email} 
      onChange={(e)=> setEmail(e.target.value)} 
      placeholder='Email' />

      <input type = "password" 
      value={password} 
      onChange={(e)=> setpassword(e.target.value)}
       placeholder='password'/>

      <input type = "Password"
       value={confirmPassword}
        onChange={(e)=> setconfirmPassword(e.target.value)} 
        placeholder='confirmPassword'/>
        <div style={{
          gap: "10px",
         justifyContent:"flex-end",
         flexDirection :"row",
         }}
         >
          <p style={{marginBottom:0}}>Not Ragister ?</p>
          <link to={"/register"} style={{textDecoration: "none",
        alignItems:"center"
        }}>
          Register Now</link>


        </div>
        <div style={{ justifyContent: "center", alignItems: "center" }}>
          <button type='submit'> Login</button>
        </div>
    </form>
  </div>;
};

export default Login;
