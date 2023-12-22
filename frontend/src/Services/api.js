import axios from "axios";


const url= "https://mydata-v5td.onrender.com";
// const url="http://localhost:5000";

export const addProduct=async(formdata)=>{
    return await axios.post(`${url}/Add_Form`,formdata);
}

export const getproduct = async() => {
    return await axios.get(`${url}/View_Form`)
}


export const deletproductById = async(product) => {
    return await axios.delete(`${url}/View_Form/${product}`);
}

export const updateProductById = async(id, updatedProduct) => {
    return await axios.put(`${url}/View_Form/${id}`, updatedProduct);
}

// login

export const addLogindata=async(login)=>{
    console.log(login);
    return await axios.post(`${url}/Registration`,login);
}

export const customerLogin = async (loginCridentials) => {
    return await axios.post(`${url}/Login/user`, loginCridentials);
}


export const getlogin=async ()=>{
    return await  axios.get(`${url}/Update_Form`);
  }
  
  export const deleteCustomerbyid=async (id)=>{
    return await  axios.delete(`${url}/Update_Form/${id}`);
  }
  
  
  export const updateloginById = async (id, updatedProduct) => {
     return await axios.put(`${url}/Update_Form/${id}`, updatedProduct);
  }

//   export const getDataCategory = async (category)=>{
//     return await axios.post(`/Men/category`, category);
//   }



