import React, { useState} from "react";
import { addProduct } from "../Services/api";

function Products() {

  

  // const [product, setProduct] = useState({
  //   Type:"",
  //   productName: "",
  //   productPrice: "",
  //   brand:"",
  // });




  const initialProductState = {
    Type: "",
    productName: "",
    //category:"",
    productPrice: "",
    brand: "",
  };


  const [product, setProduct] = useState(initialProductState);

  const [selectedFile, setSelectedFile] = useState(null);

  //category,
  const {productName, productPrice,brand } = product;

  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formdata = new FormData();
      formdata.append("Type", product.Type);
      // formdata.append("category", category);
      formdata.append("productName", productName);
      formdata.append("productPrice", productPrice);
      formdata.append("brand",brand)
      formdata.append("productImage", selectedFile);

      await addProduct(formdata);
      alert("Data is Successfully added");


      setProduct(initialProductState);
      setSelectedFile(null);
    } 



    catch (error) {
    console.log("Not saved...", error);
  }

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
        boxShadow: "0px 0px 10px 0px rgba()0, 0, 0, 0.1"
      }}
    >
      <h2>Add Product</h2>

      <form>


      {/* <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productName"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Product Category:
          </label>
          <input
            type="text"
            name="category"
            value={category}
            id="category"
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div> */}
       
       
       
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productName"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Product Name:
          </label>
          <input
            type="text"
            name="productName"
            value={productName}
            id="productName"
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>
        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productPrice"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Product Price:
          </label>
          <input
            type="Number"
            name="productPrice"
            id="productPrice"
            value={productPrice}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>



        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="brand"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Product Brand:
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            value={brand}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>



        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="Type"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Product Type:
          </label>
          <input
            type="text"
            name="Type"
            id="Type"
            value={product.Type}
            onChange={handleInputChange}
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>

        <div className="form-group" style={{ marginBottom: "15px" }}>
          <label
            htmlFor="productImage"
            style={{ display: "block", fontWeight: "bold" }}
          >
            Product Image:
          </label>
          <input
            type="file"
            name="productImage"
            id="productImage"
            onChange={handleImageChange}
            multiple
            required
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              boxSizing: "border-box",
              outline: "none",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          />
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          style={{
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "3px",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Products;
