import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Delete_Form() {

  const Ref= useRef(null);

  useEffect(()=>{
    Ref.current.focus();
  },[]);

  const [product, setProduct] = useState({
    productId: "",
    productName: "",
    productPrice: "",
    productImage: "",
  });

  function handleInputChange (e) {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  function handleSubmit (e) {
    e.preventDefault();
  };

  return (
    <div
      className="add-product-form"
      style={{
        width: "400px",
        margin: "0 auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxShadow: "0px 0px 10px 0px rgba()0, 0, 0, 0.1",
      }}
    >
      <h2>Delete Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productId"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Product ID:
          </label>
          <input
            type="number"
            id="productId"
            name="productId"
            value={product.productId}
            onChange={handleInputChange}
            required
            style={{width:"100%",padding:"8px",border: "1px solid #ccc",boxSizing: "border-box",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}> 
          <label htmlFor="productName" style={{ display: "block", fontWeight: "bold" }}>Product Name:</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={product.productName}
            onChange={handleInputChange}
            required
            style={{width:"100%",padding:"8px",border: "1px solid #ccc",boxSizing: "border-box",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="productPrice" style={{ display: "block", fontWeight: "bold" }}>Product Price:</label>
          <input
          ref={Ref}
            type="Number"
            id="productPrice"
            name="productPrice"
            value={product.productPrice}
            onChange={handleInputChange}
            required
            style={{width:"100%",padding:"8px",border: "1px solid #ccc",boxSizing: "border-box",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label htmlFor="productImage" style={{ display: "block", fontWeight: "bold"}}>Product Image:</label>
          <input
            type="file"
            id="productImage"
            name="productImage"
            value={product.productImage}
            onChange={handleInputChange}
            required
            style={{width:"100%",padding:"8px",border: "1px solid #ccc",boxSizing: "border-box",outline: "none",fontSize:"14px",border:"1px solid #ccc",borderRadius:"3px",boxSizing:"border-box"}}
          />
        </div>
        <button type="submit" style={{backgroundColor:"#4caf50",color:"white",border:"none",borderRadius:"3px",padding:"10px 20px",cursor:"pointer"}}>Delete Product</button>
      </form>
    </div>
  );
};

export default Delete_Form;
