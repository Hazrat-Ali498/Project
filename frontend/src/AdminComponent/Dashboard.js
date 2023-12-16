// Dashboard.js

import React from 'react';
// import { Fa500Px, FaAccessibleIcon, FaAccusoft, FaAd } from 'react-icons/fa';
// import Card from './Card';
// import './Card.css'; // Import the CSS file

function Dashboard() {
  return (
    <div>
      <div className="row" style={{ marginTop: "50px" }}>
        <div className="col-md-3">
          <div style={{height:"30vh",width:"1005", backgroundColor:"#f9f9f9",color:"black",boxShadow:"2px 2px 7px 7px #ebebeb"}}>
              <div style={{display:"flex",justifyContent:"center"}}>
              <h1 style={{marginTop:"30px", color:"#448DE1"}}>25</h1>
              </div>
              <h6 style={{display:"flex",justifyContent:"center", alignItems:"center",color:"#484848"}}>qty</h6>
              <h4 style={{display:"flex",justifyContent:"center", alignItems:"center",color:"#484848"}}>to be packed</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div style={{height:"30vh",width:"1005", backgroundColor:"#f9f9f9",boxShadow:"2px 2px 10px 10px #ebebeb"}}>
          <div style={{display:"flex",justifyContent:"center"}}>
              <h1 style={{marginTop:"30px",color:"#DB4230"}}>1</h1>
              </div>
              <h6 style={{display:"flex",justifyContent:"center", alignItems:"center",color:"#484848"}}>package</h6>
              <h4 style={{display:"flex",justifyContent:"center", alignItems:"center",color:"#484848"}}>to be shipped</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div style={{height:"30vh",width:"1005", backgroundColor:"#f9f9f9",boxShadow:"2px 2px 10px 10px #ebebeb"}}>
          <div style={{display:"flex",justifyContent:"center"}}>
              <h1 style={{marginTop:"30px",color:"#67798B"}}>3</h1>
              </div>
              <h6 style={{display:"flex",justifyContent:"center", alignItems:"center",color:"#484848"}}>packages</h6>
              <h4 style={{display:"flex",justifyContent:"center", alignItems:"center",color:"#484848"}}>to be delivered</h4>
          </div>
        </div>
        <div className="col-md-3">
          <div style={{height:"30vh",width:"1005", backgroundColor:"#f9f9f9",boxShadow:"2px 2px 10px 10px #ebebeb"}}>
          <div style={{display:"flex",justifyContent:"center"}}>
              <h1 style={{marginTop:"30px",color:"#FFBE00"}}>4</h1>
              </div>
              <h6 style={{display:"flex",justifyContent:"center", alignItems:"center",color:"#484848"}}>qty</h6>
              <h4 style={{display:"flex",justifyContent:"center", alignItems:"center",color:"#484848"}}>to be invoiced</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
