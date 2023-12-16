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
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17082023/hrw07381_1689685908-1567802728812.jpg",
  },
  {
    id: 2,
    name: "Textured Printed Chiffon Top",
    price: 3300,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/09082023/hrw05524_1691519149-590366060450.jpg",
  },
  {
    id: 3,
    name: "Yellow Printed Top",
    price: 2200,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/09082023/hrw07341_1691219119-925506991973.jpg",
  },
  {
    id: 4,
    name: "Chiffon Button Down Shirt",
    price: 2100,
    brand: "AWEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08082023/hrw07324_1689684545-981430113451.jpg",
  },
  {
    id: 5,
    name: "Electric Blue Relax Fit Tee",
    price: 2900,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20072023/hrw07287_1689683839-1145144427743.jpg",
  },
  {
    id: 6,
    name: "Short Sleeve Embosed T-Shirts",
    price: 2400,
    brand: "ESPICO PINK",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19072023/hrw07841_1689229002-1494283969696.jpg",
  },
  {
    id: 7,
    name: "Short Sleeve Embosed T-Shirts",
    price: 3400,
    brand: "ESPICO PINK",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17072023/hrw07777_1687262389-54434670309.jpg",
  },
  {
    id: 8,
    name: "White V-Neck Loose Fit Solid Tee",
    price: 2500,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20062023/hrw07795_1687256289-971767034767.jpg",
  },
  {
    id: 9,
    name: "Women Loose Fit Pants",
    price: 2700,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20062023/hrw07814_1687160828-663013909287.jpg",
  },
  {
    id: 10,
    name: "Women Jeggings",
    price: 1900,
    brand: "Men Black Denim Skinny Jean",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31082023/16670_569_1664013460_632ed494ef18d-46772876637.jpg",
  },
  {
    id: 11,
    name: "Women Loose Fit Pants",
    price: 2300,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31082023/16669_319_1649930620_6257f17caa960-1335635682311.jpg",
  },
  {
    id: 12,
    name: "Women Jeggings",
    price: 2600,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03062022/16673_663_1647338273_62306321cb8a8-602304925125.jpg",
  },

];

const productsPerPage = 12;

function WomenFusion() {
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

export default WomenFusion;
