import React, {useContext} from "react";
import { Context } from "../Components/Context";
import { useNavigate } from "react-router-dom";

function CustomerDetails() {
  const { handleLogout }= useContext(Context);
  const userData = localStorage.getItem('loggedUser');

  const navigation = useNavigate();

  const { customerData, setCustomerData, setIsLogin } = useContext(Context);

  const handleLogoutUser = () => {
    handleLogout();
    navigation('/Login');
    setCustomerData(null);
    setIsLogin(false);
  }

  console.log("The User is", userData);
  if(!userData){
    return null;
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h4>Welcom <span style={{color:"green"}}> {customerData.Name} </span> to our website!</h4>
      <h6> <b>Email: </b> <span style={{color:"blue"}}>{userData}</span></h6>
      <button style={{backgroundColor:"blue",color:"white",borderColor:"blue", borderRadius:"5px"}} onClick={handleLogoutUser}>Log Out</button>
    </div>
  );
};

export default CustomerDetails;
