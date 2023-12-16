import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link component
import Footer from "./FooterPage";
import { getproduct } from "../Services/api";



const productsPerPage = 8;


function Top() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [visibleProducts, setVisibleProducts] = useState(productsPerPage);
  
    const handleLoadMore = () => {
      setVisibleProducts((prev) => prev + productsPerPage);
    };



    const [products, setProducts] =  useState([])

    useEffect(()=>{
      getproductDetail();
    },[]);
  
    const getproductDetail = async() => {
      const result = await getproduct();
      setProducts(result.data);
    }

    


  
    return (
      <div>
        <div
          className="container-fluid"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap:"20px",
            justifyContent: "center",
          }}
        >
          {products.slice(0, visibleProducts).map((p) => (
            <div
              key={p.id}
              style={{ width: "calc(25% - 20px)" }}
              onMouseEnter={() => setHoveredCard(p.productImage)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
              className="mb-3"
              style={{
                width: "calc(100% - 20px)",
                textAlign: "left",
              }}
            >
              {hoveredCard === p.productImage && (
               <Link to="Nothing"> 
               <button
                  style={{
                    position: "absolute",
                    top: "82%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    padding: "7px",
                    width: "100%",
                    cursor: "pointer",
                  }}
                  
                >
                  Add to Cart
                </button>
                </Link>
              )}
              <Card.Img src={p.productImage} style={{ borderRadius: 0 }} />
              <Card.Body>
                <p><b>Rs </b>{p.productPrice}</p>
              </Card.Body>
            </Card>
            </div>
          ))}
        </div>
        {visibleProducts < products.length && (
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <button onClick={handleLoadMore} style={{width:"10%",height:"35px",borderRadius:"10px",border:"1px solid blue",backgroundColor:"blue",color:"white"}}>
              Load More
            </button>
          </div>
        )}
        <Footer />
      </div>
    );
  }

export default Top;
