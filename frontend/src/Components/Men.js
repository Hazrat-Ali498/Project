import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link component
import Footer from "./FooterPage";
const products = [

  {
    id: 1,
    name: "Hawaiian Elegance Shirt",
    price: 34.99,
    brand: "TRENDY ATTIRE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10102023/135_1696916757_6524e51510279_hrw02938_1695205966-1379519934514.jpg",
  },
  {
    id: 2,
    name: "Hawaiian Men's Elegance Shirt",
    price: 34.99,
    brand: "TRENDY ATTIRE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10102023/699_1696916778_6524e52ae7de1_hrw03073_1695204205-1030196711606.jpg",
  },
  {
    id: 3,
    name: "Casual Checked Shirt",
    price: 34.99,
    brand: "DWEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/30012023/hrw06281_1675065344-1443648714170.jpg",
  },
  {
    id: 4,
    name: " Men Cotton Casual Shirt",
    price: 34.99,
    brand: "DWEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31082023/20221_101_1649063786_624ab76a00c39-508405306019.jpg",
  },
  {
    id: 5,
    name: "West Line Black Polo Shirt",
    price: 39.99,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/04092023/hrw02577_1693828743-1064266166291.jpg",
  },
  {
    id: 6,
    name: "West Line Red Polo Shirt",
    price: 29.99,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/04092023/hrw02539_1693828916-88244289532.jpg",
  },
  {
    id: 7,
    name: "West Line White Tee Shirt",
    price: 49.99,
    brand: "WEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02052023/ad-bt-06-white-1_1678080434-546293873072.jpg",
  },
  {
    id: 8,
    name: "Men Black-White Tee Shirt",
    price: 34.99,
    brand: "AWEST LINE",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02052023/ad-bt-01-black-1_1678080315-51994481984.jpg",
  },
 
  {
    id: 9,
    name: "Men Blue Denim",
    price: 34.99,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092023/hrw04512_1684321199-963890440672.jpg",
  },
  {
    id: 10,
    name: "Men Black Denim Skinny Jean",
    price: 34.99,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092023/hrw02428_1693572764-453075824292.jpg",
  },
  {
    id: 11,
    name: "Men Blue Denim Skinny Jean",
    price: 34.99,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/04102023/hrw07549_1696415285-1665382404595.jpg",
  },
  {
    id: 12,
    name: "Men Blue Denim Skinny Jean",
    price: 34.99,
    brand: "THE DENIM DEVISION",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02092023/hrw02112_1693571172-808520609522.jpg",
  },
  
];

function Men() {

  // const [menData, setMenData]=useState([]);

  // useEffect(()=>{
  //   getMenDetails();
  // },[]);
  
  // const getMenDetails = async()=>{
  //   const MenDetails = await getDataCategory({category: "Men"});
  //   setMenData(MenDetails.data);
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
                  <p style={{color:"red",fontSize:"15px"}}>Rs: {p.price}</p>
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

export default Men;
