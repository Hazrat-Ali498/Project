import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Sidebar';
import Header from './Header';
import { useState } from 'react';
import Dashboard from './Dashboard';
import Products from './Product';
import Comment from './Comment';
import Productlist from './Productlist';
import Users from './Users';

function Admin(){
    const [ selectCategory, setSelectCategory ] = useState('');
    return(

        <div className="container-fluid">
            <div className="row" style={{width:"100vw"}}>
                <div className="col-md-2" style={{height:"100vh",padding:"0px" }}>
                    <Sidebar select = {setSelectCategory}/>
                </div>
                <div className="col-md-10" style={{height:"100vh" ,backgroundColor:"#F7F3FE",paddingLeft:"35px",paddingRight:"35px"}}>
                   <div className="row" style={{height:"10vh"}}>
                       <Header/>
                   </div>
                   <div className="row" style={{height:"90vh",padding:"0px",margin:"0px", backgroundColor:"white",paddingLeft:"30px",paddingRight:"30px",paddingTop:"20px",paddingBottom:"30px"}}>
                    {selectCategory === "Dasboard" && <Dashboard/>}
                    {selectCategory === "Products" && <Products/>}
                    {selectCategory === "Products List" && <Productlist/>}
                    {selectCategory === "Comment" && <Comment/>}
                    {selectCategory === "View Users" && <Users/>}
                   </div>
                </div>
                
            </div>

        </div>
    );
};
export default Admin;