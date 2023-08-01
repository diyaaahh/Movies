
import { Link} from 'react-router-dom';
import React, { useState } from "react";
import Axios from 'axios';
import './signuppage.css';
function SignupPage(){
    
    const[usernameReg, setUsernameReg]=useState('');
    const[passwordReg, setPasswordReg]=useState('');
    const[registerStatus, setRegisterStatus]=useState('');


    
    Axios.defaults.withCredentials =true;

        const register=() =>{
            Axios.post('http://localhost:3006/register',{
                username: usernameReg, 
                password:passwordReg,
            }).then ((response)=>{
                console.log(response);
            });
        };

    return(
    <>
    <div className="signupbc"> </div>
    <div className="signupbi"> </div>
    <div className="signup">
        <form action=''>
        <div className="username">
            <input type='email' placeholder='Enter your username' onChange={ (e)=> {setUsernameReg(e.target.value)}} />
        </div>
       <div className="password">
       <input type='password' placeholder='Enter your password' onChange={ (e)=> {setPasswordReg(e.target.value)}}/>
       </div>
       <div className='errormessage'>{registerStatus}</div>
        <div className='divforsubmitbutton'>
        <button className="submitbutton" onClick={register}> SignUp </button>
        </div>
        <div className="connectToLogin">
            <Link  className ="linkkk" to='/loginpage'
            > Already have an account ?</Link>
        </div>
        </form>
    </div>
    </>
);}

export default SignupPage;