import Add_Form from "./Add_Form";
import Update_Form from "./Update_Form";
import View_Form from "./View_Form";
import Delete_Form from "./Delete_Form";
import React, { useState } from "react";
import Header from "./Ad_Header";
import Ad_Menu from "./Ad_Menu";
import Order from "./Orders";
import Customer from "./Customer";

function Admin() {
  const [ selectCategory, setSelectCategory ] = useState('');


  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ borderBottom: "1px solid #acacac", height: "20vh" }}
      >
        <Header />
      </div>

      <div className="row" style={{ height: "100vh" }}>
        <div
          className="col-md-3 "
          style={{ borderRight: "1px solid #acacac", height: "100%"}}
        >
          <Ad_Menu select = {setSelectCategory}  />
          
        </div>

        <div className="col-md-9" style={{ height: "100%", marginTop: "8%" }}>
        {selectCategory === "Add Product" && <Add_Form />}
        {selectCategory === "Update Product" && <Update_Form />}
        {selectCategory === "View Product" && <View_Form />}
        {selectCategory === "Delete Product" && <Delete_Form />}
        {selectCategory ==="Order" && <Order/>}
        {selectCategory === "Customer" && <Customer/>}
        
        </div>
      </div>
    </div>
  );
}

export default Admin;
