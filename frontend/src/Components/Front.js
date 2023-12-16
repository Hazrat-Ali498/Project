import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Images/carousel1.png";
import img2 from "../Images/carousel2.png";
import img3 from "../Images/carousel3.png";
import Footer from "../Components/FooterPage";
import { Card, Nav } from "react-bootstrap";
import "../Components/Front.css";
import { useContext } from "react";
import { Context } from "./Context";
import { Link } from "react-router-dom";
import { getproduct } from "../Services/api";


function Frontpage() {

  // const [productData, setproductData]= useState([]);

  // useEffect(()=>{
  //   getproductDetail();
  // },[]);

  // const getproductDetail = async() => {
  //   const result = await getproduct();
  //   setproductData(result.data);
  // }

const {Item1, Item2, Item3 } = useContext(Context);

  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img src={img1} style={{ width: "100%", height: "80vh" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} style={{ width: "100%", height: "80vh" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} style={{ width: "100%", height: "80vh" }} />
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="Container">
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "8vh",
            marginTop: "50px",
            marginBottom:"20px",
          }}
        >
          <h3>TOP CATEGORY</h3>
        </div>
      </div>

      <div
        className="container-fluid"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Item1.map((p) => (
          <div
            style={{  width: "calc(20% - 20px)" }}
           
          >
            <Card
              className="mb-3"
              style={{
                width: "100%",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Link to={p.Type}>
              <Card.Img src={p.Image} style={{ borderRadius: 0 }} />
              </Link>
              <Card.Body>
                <Card.Title>
                  <h6 style={{ fontSize: "17px", color: "#00000" }}>{p.Name}</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="Container-fluid">
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "15vh",
            marginTop: "35px",
          }}
        >
          <h3>TOP BRANDS</h3>
        </div>
      </div>

      <div
        className="container "
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {Item2.map((p) => (
          <div
            style={{  width: "calc(25% - 20px)" }}
           
          >
            <Card
              className="mb-3"
              style={{
                width: "100%",
                textAlign: "left",
                position: "relative",
                border:"none",
              }}
            >
              <Link to={p.Type}>
              <Card.Img src={p.Image} style={{ borderRadius: 0 }} />
              </Link>
              <Card.Body>
                <Card.Title>
                  <h6 style={{ fontSize: "17px", color: "#5c5c5c" }}>{p.Name}</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div className="Container">
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "35vh",
            marginTop: "35px",
            border: "1px solid black",
            backgroundColor: "#7F1794",
          }}
        >
          <h3 style={{ marginTop: "80px", color: "white", fontSize: "50px" }}>
            <strong>
              <b>#TOP TRENDING</b>
            </strong>
          </h3>
        </div>
      </div>

      <div
        className="container "
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "80px",
        }}
      >
        {Item3.map((p) => (
          <div 
            style={{  width: "calc(25% - 20px)" }}
           
          >
            <Card
              className="mb-3"
              style={{
                width: "100%",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Link to={p.Type}>
              <Card.Img src={p.Image} style={{ borderRadius: 0 }} />
              </Link>
              <Card.Body>
                <Card.Title>
                  <h6 style={{ fontSize: "17px", color: "#000000" }}><b>Rs: </b>{p.Price}</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}


export default Frontpage;
