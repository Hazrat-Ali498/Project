import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link component
import Footer from "./FooterPage";
const products = [
  {
    id: 1,
    name: "Blocked Vest Crop Top",
    price: 1400,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/06112023/el-w1p67_1699253890-1290941496118.jpg",
  },
  {
    id: 2,
    name: "Textured Printed Chiffon Top",
    price: 2100,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/06112023/el-w1p68_1699253911-137130350965.jpg",
  },
  {
    id: 3,
    name: "Yellow Printed Top",
    price: 1200,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/13102023/hrw09319_1697002678-120778155732.jpg",
  },
  {
    id: 4,
    name: "Chiffon Button Down Shirt",
    price: 1800,
    brand: "AWEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/13102023/hrw09287_1697002743-1037535692256.jpg",
  },
  {
    id: 5,
    name: "Electric Blue Relax Fit Tee",
    price: 3100,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/13102023/hrw09334_1697002800-888737007885.jpg",
  },
  {
    id: 6,
    name: "Short Sleeve Embosed T-Shirts",
    price: 1100,
    brand: "ESPICO PINK",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/06102023/hrw04890_1696573924-1667530629977.jpg",
  },
  {
    id: 7,
    name: "Short Sleeve Embosed T-Shirts",
    price: 2100,
    brand: "ESPICO PINK",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03102023/hrw04991_1696310789-117383569945.jpg",
  },
  {
    id: 8,
    name: "White V-Neck Loose Fit Solid Tee",
    price: 1000,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092023/hrw05010_1694171819-610342986655.jpg",
  },
  {
    id: 9,
    name: "Women Loose Fit Pants",
    price: 910,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092023/hrw05138_1694173658-1614999758875.jpg",
  },
  {
    id: 10,
    name: "Women Jeggings",
    price: 850,
    brand: "Men Black Denim Skinny Jean",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092023/hrw05114_1694173492-1362456638302.jpg",
  },
  {
    id: 11,
    name: "Women Loose Fit Pants",
    price: 2300,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/11092023/s2_1694413516-1424600738046.jpg",
  },
  {
    id: 12,
    name: "Women Jeggings",
    price: 2500,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/11092023/s1_1694413532-753562151202.jpg",
  },

  {
    id: 13,
    name: "Women Loose Fit Pants",
    price: 1350,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092023/hrw05036_1694172184-214615114353.jpg",
  },
  {
    id: 14,
    name: "Women Jeggings",
    price: 1450,
    brand: "Men Black Denim Skinny Jean",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092023/hrw04911_1694170486-243866775385.jpg",
  },
  {
    id: 15,
    name: "Women Loose Fit Pants",
    price: 1500,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092023/iqra-116_1690279836-882128893253.jpg",
  },
  {
    id: 16,
    name: "Women Jeggings",
    price: 1600,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25082023/hrw05201_1692961120-1448125796194.jpg",
  },
  {
    id: 17,
    name: "Women Loose Fit Pants",
    price: 1750,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/17082023/iqra-140_1690279405-713691795339.jpg",
  },
  {
    id: 18,
    name: "Women Jeggings",
    price: 1850,
    brand: "Men Black Denim Skinny Jean",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08082023/hrw07145_1689686000-890847164419.jpg",
  },
  {
    id: 19,
    name: "Women Loose Fit Pants",
    price: 2150,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31072023/hrw07091_1689684703-78419880550.jpg",
  },
  {
    id: 20,
    name: "Women Jeggings",
    price: 750,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/25072023/iqra-87_1690278771-1171919109616.jpg",
  },
  {
    id: 21,
    name: "Women Loose Fit Pants",
    price: 900,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24072023/hrw05174_1690197497-345062368149.jpg",
  },
  {
    id: 22,
    name: "Women Jeggings",
    price: 1200,
    brand: "Men Black Denim Skinny Jean",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20072023/hrw07220_1689684756-407263031395.jpg",
  },
  {
    id: 23,
    name: "Women Loose Fit Pants",
    price: 1900,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20072023/hrw07166_1689684616-147437836953.jpg",
  },
  {
    id: 24,
    name: "Women Jeggings",
    price: 1100,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/24072023/hrw07242_1689683765-1243135170941.jpg",
  },

];
const productsPerPage = 12;

function Kurta() {
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
  
export default Kurta;
