import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link component
import Footer from "./FooterPage";
const products = [

  {
    id: 1,
    name: "Women Loose Fit Pants",
    price: 34.99,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/04082023/iqra-762_1690280068-1045041548640.jpg",
  },
  {
    id: 2,
    name: "Women Jeggings",
    price: 34.99,
    brand: "Men Black Denim Skinny Jean",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/22062023/hrw07647_1687250766-1241482622973.jpg",
  },
  {
    id: 3,
    name: "Women Loose Fit Pants",
    price: 34.99,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/22062023/hrw07599_1687250540-1562144085188.jpg",
  },
  {
    id: 4,
    name: "Women Jeggings",
    price: 34.99,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/22062023/hrw07659_1687250874-755237959268.jpg",
  },
  
  {
    id:5,
    name: "Electric Blue Relax Fit Tee",
    price: 34.99,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092023/hrw05560_1694509882-566327295990.jpg",
  },
  {
    id: 6,
    name: "Short Sleeve Embosed T-Shirts",
    price: 34.99,
    brand: "ESPICO PINK",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/06072023/245_1688635842_64a689c254c59_image00017_10027696-99e2-4898-a52e-ba8b1fe98110-68283538141.jpg",
  },
  {
    id: 7,
    name: "Short Sleeve Embosed T-Shirts",
    price: 34.99,
    brand: "ESPICO PINK",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/06072023/500_1688635786_64a6898a41719_image00118-1085886076133.jpg",
  },
  {
    id: 8,
    name: "White V-Neck Loose Fit Solid Tee",
    price: 34.99,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/04052023/hrw09435_1683100537-1182441867890.jpg",
  },
  {
    id: 9,
    name: "Blocked Vest Crop Top",
    price: 39.99,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092023/hrw05390_1694512473-1260378789810.jpg",
  },
  {
    id: 10,
    name: "Textured Printed Chiffon Top",
    price: 29.99,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/13102023/hrw09409_1697025472-1300841369192.jpg",
  },
  {
    id: 11,
    name: "Yellow Printed Top",
    price: 49.99,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12092023/hrw05331_1694509854-828948175612.jpg",
  },
  {
    id: 12,
    name: "Chiffon Button Down Shirt",
    price: 34.99,
    brand: "AWEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/05082023/iqra-418_1691231975-1652181279626.jpg",
  },
  
];

function Women() {

  // const [womenData, setWomenData]=useState([]);

  // useEffect(()=>{
  //   getWomenDetails();
  // },[]);
  
  // const getWomenDetails = async()=>{
  //   const WomenDetails = await getDataCategory({category: "Women"});
  //   setWomenData(WomenDetails.data);
  // }



  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
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
        {products.map((p) => (
          <div
            style={{ width: "calc(25% - 20px)"}}
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
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    padding: "7px",
                    width: "80%",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  
                >
                  Add to Cart
                </button>
                </Link>
              )}
              <Card.Img src={p.image} style={{ borderRadius: 0 }} />
              <Card.Body>
                <Card.Title>
                  <p style={{fontSize:"13px", marginBottom:"0px"}}>{p.brand}</p>
                  <h6 style={{ fontSize: "17px", color: "#000000" }}>{p.name}</h6>
                  <p style={{color:"red",fontSize:"15px"}}>{p.price}</p>
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

export default Women;
