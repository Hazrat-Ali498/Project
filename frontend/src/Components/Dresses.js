import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link component
import Footer from "./FooterPage";
const products = [
  {
    id: 1,
    name: "Blocked Vest Crop Top",
    price: 4300,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/13102023/hrw09678_1697025361-160007269094.jpg",
  },
  {
    id: 2,
    name: "Textured Printed Chiffon Top",
    price: 3300,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17072023/hrw03518_1687371157-210176562247.jpg",
  },
  {
    id: 3,
    name: "Yellow Printed Top",
    price: 2200,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/14062023/hrw09421_1686207445-1267471491359.jpg",
  },
  {
    id: 4,
    name: "Chiffon Button Down Shirt",
    price: 2100,
    brand: "AWEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/14062023/hrw03782_1686207476-1429394102242.jpg",
  },
  {
    id: 5,
    name: "Electric Blue Relax Fit Tee",
    price: 2900,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30032023/hrw09213_1680160187-772246758165.jpg",
  },
  {
    id: 6,
    name: "Short Sleeve Embosed T-Shirts",
    price: 2400,
    brand: "ESPICO PINK",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30032023/hrw09122_1680160294-1320870483801.jpg",
  },
  {
    id: 7,
    name: "Short Sleeve Embosed T-Shirts",
    price: 3400,
    brand: "ESPICO PINK",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30032023/hrw09200_1680160336-1503421969537.jpg",
  },
  {
    id: 8,
    name: "White V-Neck Loose Fit Solid Tee",
    price: 2500,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30032023/hrw09167_1680160372-1047486581075.jpg",
  },
  {
    id: 9,
    name: "Women Loose Fit Pants",
    price: 2700,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31082023/hrw01004_1674720116-358527657085.jpg",
  },
  {
    id: 10,
    name: "Women Jeggings",
    price: 1900,
    brand: "Men Black Denim Skinny Jean",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31082023/16738_342_1667218400_635fbbe09d9e5-1265728189893.jpg",
  },
  {
    id: 11,
    name: "Women Loose Fit Pants",
    price: 2300,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31082023/16740_643_1667218714_635fbd1aaf692-84307166013.jpg",
  },
  {
    id: 12,
    name: "Women Jeggings",
    price: 2600,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31082023/17988_54_1664006283_632eb88b16ddd-1155658561191.jpg",
  },
];

const productsPerPage = 12;


function Dresses() {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [visibleProducts, setVisibleProducts] = useState(productsPerPage);
  
    const handleLoadMore = () => {
      setVisibleProducts((prev) => prev + productsPerPage);
    };
  
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
              onMouseEnter={() => setHoveredCard(p.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card
              className="mb-3"
              style={{
                width: "calc(100% - 20px)",
                textAlign: "left",
              }}
            >
              {hoveredCard === p.id && (
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
              <Card.Img src={p.image} style={{ borderRadius: 0 }} />
              <Card.Body>
                <p><b>Rs </b>{p.price}</p>
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

export default Dresses;
