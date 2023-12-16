import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { deleteCustomerbyid, getlogin, updateloginById } from '../Services/api';



function Users(){
    const [logindata, setlogindata] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedlogin, setSelectedlogin] = useState({});
    const [updatedlogin, setUpdatedlogin] = useState({
      Name: "",
      Email: "",
      Confirmpass:"",
    });
  
    useEffect(() => {
      getCustomerDetail();
    },[]);
  
    const getCustomerDetail = async () => {
      try {
        const result = await getlogin();
        console.log(result.data);
        setlogindata(result.data);
      } catch (error) {
        console.log("Error ", error);
      }
    };
  
    const handleDeleteCustomer = async (id) => {
      try {
        await deleteCustomerbyid(id);
        const updated = logindata.filter((product) => product._id !== id);
        setlogindata(updated);
      } catch (error) {
        console.log("Error in deleting login", error);
      }
    };
  
    const handleShow = (product) => {
      setSelectedlogin(product);
      setUpdatedlogin({
        Name: product.Name,
        Email: product.Email,
        Password: product.Password,
        Confirmpass: product.Confirmpass,

        // Set other fields as needed
      });
      setShowModal(true);
    };
  
    const handleClose = () => {
      setShowModal(false);
    };


    const isEmailValid = (email) => {
      // Simple email validation using regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };



  
    const handleUpdate = async (e) => {
      e.preventDefault();
      try {



        // Password matching and length validation
      if (updatedlogin.Password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
      }

      if (updatedlogin.Password !== updatedlogin.Confirmpass) {
        alert('Passwords do not match.');
        return;
      }

      // Email validation
      if (!isEmailValid(updatedlogin.Email)) {
        alert('Please enter a valid email address.');
        return;
      }



        const id = selectedlogin._id;
        const updatedProduct = await updateloginById(id, updatedlogin);
        console.log("Product updated:", updatedProduct);
        setShowModal(false);
        // Optionally, you can fetch updated data after a successful update
        getCustomerDetail();
      } catch (error) {
        console.log("Error in updating product", error);
      }
    };
    return (

        <>
      <Table striped bordered hover>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Confirm Password</th>
          <th>Actions</th>
         
        </thead>
        <tbody>
          {logindata.map((details, index) => (
            <tr key={index}>
              <td>{details.Name}</td>
              <td>{details.Email}</td>
              <td>{details.Password}</td>
              <td>{details.Confirmpass}</td>
              <td>
                <button style={{color:"green", border:"none",fontSize:"25px", borderRadius:"10",marginRight:"5px"}} onClick={()=>handleShow(details)}>
                    <MdOutlineEdit />
                  </button> 
                  <button style={{color:"red",border:"none",fontSize:"25px", marginTop:"10px"}} onClick={() => handleDeleteCustomer(details._id)} >
                    <RiDeleteBinLine />
                 </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleUpdate}>
            <Form.Group controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.Name}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, Name: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="formProductPrice">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={updatedlogin.Email}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, Email: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formProductPrice">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={updatedlogin.Password}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, Password: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="formProductPrice">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={updatedlogin.Confirmpass}
                onChange={(e) => setUpdatedlogin({ ...updatedlogin, Confirmpass: e.target.value })}
              />
            </Form.Group>


            <Button  variant="primary" type="submit">
              Update
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
    );
    
}

export default Users;