import React from "react";
import { Card, Button,} from "react-bootstrap";
import img6 from "../Images/Shop_Boy.png";
import img7 from "../Images/Shop_Girl.png";
import img8 from "../Images/Top & Tees.png";
import img9 from "../Images/Jumpsuit.png";
import img10 from "../Images/Festive Wear.png";
import { Link } from "react-router-dom";
import Footer from "./FooterPage";

function Kids() {
  const Kidsproduct = [
    {
      Name: "Dresses",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/1.Dresses.png",
    },
    {
      Name: "Bottoms",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/2.Bottoms.png",
    },
    {
      Name: "sTops & Tees",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230418/3.Tops%20_%20Tees.jpg",
    },
    {
      Name: "Festive Wear",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/4.Festive-Wear.png",
    },
    {
      Name: "sWinter Wear",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/6.Winter-Wear.png",
    },

    {
      Name: "T-Shirts",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/8.T-Shirts.png",
    },

    {
      Name: "Casual Shirt",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230418/7.Casual%20Shirts.jpg",
    },
    {
      Name: "Polos",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/9.Polos.png",
    },
    { 
      Name: "Festive Wear",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/10.Festive-Wear.png",
    },
    {
      Name: "Winter Wear",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/12.Winter-Wear.png",
    },
  ];
  const KidsProduct1=[
    {Image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/1.UNDER-RS.599.png"},
    {Image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/2.UNDER-RS.999.png"},
    {Image:"https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/3.UNDER-RS.1599.png"},
  ];

  return (
    <div>
      <div>
        <h3 style={{textAlign:"center", marginTop:"60px"}}>
          SHOP BY DEPARTMENT
        </h3>
        <div className="container" style={{width:"100vw",display:"flex",gap:"30px",marginTop:"40px"}}>
          <div style={{width:"50%",float:"left"}}>
            <Link>
              <img src={img6} style={{width:"100%"}}/>
            </Link>
          </div>
          <div style={{width:"50%",float:"right"}}>
            <Link>
              <img src={img7} style={{width:"100%"}}/>
            </Link>
          </div>
          </div>
        </div>

        <div>
        <h3 style={{textAlign:"center", marginTop:"60px"}}>
          SUMMER ESSENTIALS
        </h3>
        <div className="container" style={{width:"100vw",display:"flex",gap:"30px",marginTop:"40px"}}>
          <div style={{width:"33.33%"}}>
            <Link>
              <img src={img8} style={{width:"100%"}}/>
            </Link>
          </div>
          <div style={{width:"33.33%"}}>
            <Link>
              <img src={img9} style={{width:"100%"}}/>
            </Link>
          </div>
          <div style={{width:"33.33%"}}>
            <Link>
              <img src={img10} style={{width:"100%"}}/>
            </Link>
          </div>
        </div>
        </div>

      <div>
        <h2 style={{textAlign:"center",marginTop:"80px",marginBottom:"60px"}}>
          SHOP BY CATEGORY- GIRLS & BOYS
        </h2>
      </div>
      <div className="container-fluid " style={{display:"flex",flexDirection:"row",gap:"20px",flexWrap:"wrap",justifyContent:"center"}}>
        {Kidsproduct.map((kp) => (
            <Card className="mb-3" style={{width:"calc(20% - 20px)", textAlign: "center",border:"none" }}>
              <Link>
                <Card.Img variant="top" src={kp.image} />
              </Link>
              <Card.Body>
                <Card.Title>{kp.Name}</Card.Title>
              </Card.Body>
            </Card>
        
        ))}
      </div>
      <div>
        <h2 style={{textAlign:"center",marginTop:"80px",marginBottom:"60px"}}>
        POCKET FRIENDLY STORE
        </h2>
        <div className="container" style={{display:"flex",flexDirection:"row",gap:"40px",flexWrap:"wrap",justifyContent:"center"}}>
        {KidsProduct1.map((k) => (
            <Card className="mb-3" style={{width:"calc(32% - 20px)", textAlign: "center",border:"none" }}>
              <Link>
                <Card.Img variant="top" src={k.Image} />
              </Link>
            </Card>
        
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
}
export default Kids;
