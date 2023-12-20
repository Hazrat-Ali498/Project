import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { customerLogin } from '../Services/api';
import '../Component2/Login.css';
import { Context } from '../Components/Context';
function Login(){
  const { setCustomerData, setIsLogin } = useContext(Context);

  const [lognCridentials, setLoginCridentials] = useState( {
    Email:'',
    Password: ''
  } );

  const navigation = useNavigate();

  const handleInputChannge = (e) => {
    setLoginCridentials({...lognCridentials, [e.target.name]: e.target.value});
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await customerLogin(lognCridentials);
      const customer = response.data;
      console.log('Data is:', customer.customerData);
      if(customer.message === true){
        setCustomerData(customer.customerData);
        setIsLogin(true);
        navigation('/');
      } else {
        console.log('User does not exit...');
      }
    } catch (error) {
      console.log("Can not login", error);
    }
  }
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
              <span class="sign-up-link">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
};
export default Login;