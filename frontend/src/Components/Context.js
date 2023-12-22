import React, { createContext, useState } from "react";
import { products, TopBrand, TopTrend } from "./Data";

export const Context = createContext();

const FrontContext = ({ children }) => {
  const [Item1, setItem1] = useState(products);
  const [Item2, setItem2] = useState(TopBrand);
  const [Item3, setItem3] = useState(TopTrend);
  const [customerData, setCustomerData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogout = () => {

    if('loggedUser') {
      localStorage.removeItem('loggedUser');
    localStorage.removeItem('token');
    localStorage.removeItem('adminEmail');
   
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('adminEmail');
    }
}

  return (
    <Context.Provider
      value={{ Item1, setItem1, Item2, setItem2, Item3, setItem3, customerData, setCustomerData, setIsLogin, isLogin , handleLogout }}
    >
      {children}
    </Context.Provider>
  );
};
export default FrontContext;
