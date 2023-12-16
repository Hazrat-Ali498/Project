import React from "react";
import Footer from "../Components/FooterPage";
import img4 from "../Images/About2.png";
import img5 from "../Images/About3.png";
import img6 from "../Images/About4.png";

function About() {
  return (
    <div>
      <div className="container" style={{width:"100vw", height:"70vh",backgroundColor:"pink",}}>
        <p style={{textAlign:"center", marginLeft:"60px", marginRight:"60px",backgroundColor:"white",position:"relative",top:"70px",padding:"60px",fontFamily:"Lucida Console, Monaco, monospace"}}>
          <h4>
          THE STORY OF US
          </h4>
          Founded in 2002 by a passionate fashion enthusiast in a humble dorm room, Elite Haven is the embodiment of timeless elegance fused with modern sensibilities. Our online store curates a stunning collection of vintage-inspired clothing for men, women, and kids, reflecting a blend of classic charm and contemporary style. Committed to inclusivity, we offer fashion in a range of sizes, ethically crafted by global factories. Our dedicated team strives to provide customers with beautifully curated fashion, ensuring everyone finds their perfect style at Elite Haven.
        </p>
        
      </div>
      <div>
        <h2 style={{textAlign:"center",fontFamily:"Comic Sans MS, cursive",marginTop:"50px",marginBottom:"30px",}}>
          ELITE HAVEN'S MISSION
        </h2>
        <div className="container" style={{display:"flex"}}>
          <div style={{backgroundColor:"#F9F6F4",width:"50%",}}>
           
              <p style={{textAlign:"center", marginLeft:"60px", marginRight:"60px",position:"relative",top:"30%",fontFamily:"Georgia, serif"}}>
                <h3 style={{textAlign:"center"}}>
                  For Everybody and Every Body
                </h3>
                At Elite Haven, inclusivity is our cornerstone. We embrace individuals of all sizes, colors, genders, abilities, and orientations. Our commitment shines through in our diverse range of styles, available in sizes XS – 4X. Every member of our community is celebrated, and we're proud to offer 100% of our Elite Haven label within this inclusive size range.
              </p>
          </div>
          <div style={{width:"50%"}}>
            <img src={img4} style={{width:"100%"}} />
          </div>

        </div>

        <div className="container" style={{display:"flex"}}>

          <div style={{width:"50%"}}>
            <img src={img5} style={{width:"100%"}} />
          </div>
          <div style={{backgroundColor:"#F9F6F4",width:"50%",}}>
           
              <p style={{textAlign:"center", marginLeft:"60px", marginRight:"60px",position:"relative",     top:"30%",fontFamily:"Georgia, serif"}}>
                  <h3 style={{textAlign:"center"}}>
                    Causes Close to Our Heart
                  </h3>
                  At Elite Haven, we are dedicated to collaborating with and supporting charitable organizations that make a direct impact on women's lives. Our commitment extends to partnerships with organizations such as The Trans Wellness Center, The Pink House, and The National Domestic Violence Hotline, as we work together to make a positive difference in our community.
              </p>
          </div>
        </div>

        <div className="container" style={{display:"flex" }}>
          <div style={{backgroundColor:"#F9F6F4",width:"50%", justifyContent:"center"}}>
           
              <p style={{textAlign:"center", marginLeft:"60px", marginRight:"60px",position:"relative",top:"30%",fontFamily:"Georgia, serif"}}>
                <h3 style={{textAlign:"center"}}>
                Close-Knit Community
                </h3>
                  At Elite Haven, you're not just a customer; you're a cherished member of our nurturing and empowering community. We are here to uplift and support all individuals, fostering a sense of belonging and empowerment for everyone who walks through our doors.
              </p>
          </div>
          <div style={{width:"50%"}}>
            <img src={img6} style={{width:"100%"}} />
          </div>
              
        </div>
      </div>
      <div style={{height:"10vh"}}></div>
      <div className="container" style={{width:"100%",height:"70vh",backgroundColor:"#F9F6F4",}}>
        <p style={{textAlign:"center", marginLeft:"230px", marginRight:"230px",position:"relative",top:"23%",fontFamily:"Georgia, serif",color:"#035F60",fontSize:"18px"}}>
          <h3 style={{textAlign:"center",fontSize:"60px"}}>
            Score 20% Off
          </h3>
            Join our mailing list and enjoy an exclusive <b>20% discount</b> on your initial purchase. Be the first to discover special offers, new product launches, and more.
            <p style={{fontSize:"15px"}}>
            Offer valid for full-price styles, granting early access to special sale events and exclusive previews of our latest arrivals.
            </p>
          </p>
          <input type="email"placeholder="Email Address" style={{width:"60%",height:"50px",paddingLeft:"20px",border:"1px solid #606A72", marginTop:"110px",marginLeft:"150px", borderRadius:"3px"}} ></input>
          <button style={{height:"50px",width:"10%",border:"none", backgroundColor:"#035F60",marginLeft:"30px",borderRadius:"none",color:"white"}}>Sign up</button>
      </div>
      
      <Footer/>
    </div>
  );
}

export default About;
