import { useState, useContext } from 'react';
import { Link} from 'react-router-dom';
import { customerLogin } from '../Services/api';
import '../Component2/Login.css';
import { Context } from '../Components/Context';

import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




function Login(){
  const { setCustomerData, setIsLogin } = useContext(Context);

  const [lognCridentials, setLoginCridentials] = useState( {
    Email:'',
    Password: ''
  } );

  const navigation = useNavigate();
  const navigate = useNavigate();

  const handleInputChannge = (e) => {
    setLoginCridentials({...lognCridentials, [e.target.name]: e.target.value});
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await customerLogin(lognCridentials);
      const customer = response.data;
  
      if (customer.message === true) {
        setCustomerData(customer.customerData);
        setIsLogin(true);
  
        const token = customer.token;
        localStorage.setItem('token', token);
        if (token) {
          setAuthToken(token); // Function to set token in Axios headers
          }
      } 
 

        if (response.data.Email) {
          localStorage.setItem('adminEmail', response.data.Email);
    
          navigation('/Admin');
        } else {
          navigation('/');
        }
        console.log(response.data.customerData.Email);
        localStorage.setItem('loggedUser', response.data.customerData.Email);
      
    } catch (error) {
      console.log("Cannot login", error);
    }
  };
  

  const setAuthToken = (token) => {
    if (token) {
      // Apply the token to every request header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      // If the token is not present, remove it from headers
      delete axios.defaults.headers.common['Authorization'];
    }
    };






    return(
    
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div class="form-container">
          <p class="title">Welcome back</p>
          <form class="form">
            <input type="email" name='Email' class="input" placeholder="Email" onChange={handleInputChannge}/>
            <input type="password" name='Password' class="input" placeholder="Password" onChange={handleInputChannge}/>
            <button class="form-btn" onClick={handleLogin}>Log in</button>
          </form>
          <p class="sign-up-label">
            Don't have an account?
            <Link to='/Registration'>
              <span class="sign-up-link"> Sign up</span>
            </Link>
          </p>


          <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
                navigate("/");
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />




        </div>
      </div>
    </div>
    );
};
export default Login;