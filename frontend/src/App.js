import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import MenuBar from "./Components/MenuBar";
import Frontpage from "./Components/Front";
// import Admin from "./Component2/AdminPage";
import Admin from "./AdminComponent/Admin";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Footer from "./Components/FooterPage";
import Top from "./Components/Tops";
import Kurta from "./Components/Kurtas";
import WomenFusion from "./Components/WomenFusion";
import Dresses from "./Components/Dresses";
import Lawn from "./Components/Lawn";
import Contact from "./Components/Contact";
import Login from "./Component2/Login";
import Registration from "./Component2/Registration";
import CustomerDetails from "./Component2/Customer";

function App() {
  const location = useLocation();
  const shownavbar = !location.pathname.includes("/Admin");

  return (
    <div style={{ backgroundColor: "white" }}>
      {shownavbar && <MenuBar />}

      {Footer}

      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/About" element={<About />} />
        <Route path="/For-Men" element={<Men />} />
        <Route path="/For-Women" element={<Women />} />
        <Route path="/For-Kids" element={<Kids />} />
        <Route path="/Contact-us" element={<Contact/>} />
        {/* <Route path="/AdminPage" element={<Admin />} /> */}
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Tops" element={<Top/>}/>
        <Route path="/Kurta" element={<Kurta/>}/>
        <Route path="/WomenFusion" element={<WomenFusion/>}/>
        <Route path="/Dresses" element={<Dresses/>}/>
        <Route path="/Lawn" element={<Lawn/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Customer" element={<CustomerDetails/>}/>
        <Route path="/Registration" element={<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
