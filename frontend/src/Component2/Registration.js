import { useState } from 'react';
import { addLogindata } from '../Services/api';
import '../Component2/Login.css';
function Registration(){


  // const [login, setlogin] = useState({
  //   Name:"",
  //   Email: "",
  //   Password: "",
  //   Confirmpass: "",
  // });



  const initialDataState ={
    Name:"",
    Email: "",
    Password: "",
    Confirmpass: "",
  }

  const [login, setlogin]= useState(initialDataState);



  const {Name, Email, Password, Confirmpass}=login;

  const handleInputChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };



  const isEmailValid = (email) => {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };






  const handleSubmit = async (e) => {
    e.preventDefault();

    try {



            // Email validation
            if (!isEmailValid(Email)) {
              alert('Please enter a valid email address.');
              return;
            }
      



      if (Password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      if (Password !== Confirmpass) {
        alert('Passwords do not match.');
        return;
      }

      
      console.log(login);
      await addLogindata(login);
      alert("Data is succesfully added");

      setlogin(initialDataState);


    } 
    catch (error) {
      console.log("Not saved...", error);
    }
  };

    return(

      <div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div class="form-container">
            <p class="title">Registration form</p>
            <form class="form">
              <input type="text" name="Name" value={Name} onChange={handleInputChange} class="input" placeholder="Enter Your Name"/>
              <input type="email" name="Email" value={Email} onChange={handleInputChange} class="input" placeholder="Enter an email"/>
              <input type={showPassword ? 'text' : 'password'} name="Password" value={Password} onChange={handleInputChange} class="input" placeholder="Password"/>
              <input type={showPassword ? 'text' : 'password'} name="Confirmpass" value={Confirmpass} onChange={handleInputChange} class="input" placeholder="Confirm Password"/>

              <label>
              <input type="checkbox" style={{fontSize:"10px"}} checked={showPassword} onChange={togglePasswordVisibility} className="password-toggle-checkbox" />
              Show Password
            </label>

              <button type='button' onClick={handleSubmit} class="form-btn">sign up</button>
            </form>
          </div>
        </div>
      </div>
    );
};
export default Registration;