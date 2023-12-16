import React, { createContext, useState } from "react";
import { products, TopBrand, TopTrend } from "./Data";

export const Context = createContext();

const FrontContext = ({ children }) => {
  const [Item1, setItem1] = useState(products);
  const [Item2, setItem2] = useState(TopBrand);
  const [Item3, setItem3] = useState(TopTrend);
  const [customerData, setCustomerData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Context.Provider
      value={{ Item1, setItem1, Item2, setItem2, Item3, setItem3, customerData, setCustomerData, setIsLogin, isLogin }}
    >
      {children}
    </Context.Provider>
  );
};
export default FrontContext;
