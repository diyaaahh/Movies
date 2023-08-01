import { Link , useNavigate} from 'react-router-dom';
import React, { useEffect, useState } from "react";
import Axios from 'axios';
import './loginpage.css';

function LoginPage(){
    const[usernamelog, setUsernamelog]=useState('');
    const[passwordlog, setPasswordlog]=useState('');
    const [loginStatus, setLoginStatus] = useState('');
    const navigate = useNavigate();
    
    Axios.defaults.withCredentials =true;


    const login = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3006/login', {
          username: usernamelog,
          password: passwordlog,
        }).then((response) => {
          if (response.data.message) {
            // Login failed
            setLoginStatus(response.data.message);
          } else {
            // Login successful
            setLoginStatus(`Welcome, ${response.data.username}!`);
            navigate('/mainpage')
          }
        });
      };
      useEffect(()=> {
        Axios.get('http://localhost:3006/login').then ((response) => {
            if(response.data.loggedIn){
           setLoginStatus(response.data.user[0].username);}
        })
      },)
    return(
        <>
        <div className="loginbc"> </div>
        <div className='loginbi'> </div>
        <div className="loginpage">
       < h1> Login Page!</h1>
       <form action='' >
        <div className="usernameforlogin">
            <input type='email' placeholder='Enter your username' onChange={ (e)=> {setUsernamelog(e.target.value)}} />
        </div>
       <div className="passwordforlogin">
       <input type='password' placeholder='Enter your password' onChange={ (e)=> {setPasswordlog(e.target.value)}} />
       </div>
        <div className='errormessage'> {loginStatus}</div>
       <div className="divforloginbutton">
        <button className ="loginbutton" onClick={login}> Login </button>
       </div>
        <div className="connectToSignup">
            <Link className='linkkkk' to='/signuppage' >Dont have an account ?</Link>
        </div>
        </form>
        </div>
        </>
    );
}
export default LoginPage;