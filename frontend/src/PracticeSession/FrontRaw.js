function Fronttpage() {
    const { Item1, Item2, Item3 } = useContext(Context);
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
              marginTop: "35px",
            }}
          >
            <h3>TOP CATEGORY</h3>
          </div>
        </div>
  
        <br></br>
  
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {Item1.map((p) => (
            <Card
              className="mb-3"
              style={{
                width: "calc(20% - 20px)",
                textAlign: "center",
                borderRadius: 0,
              }}
            >
              <Card.Img src={p.Image} style={{ borderRadius: 0 }} />
              <Card.Body>
                <Card.Title style={{ fontSize: "20px" }}>{p.Name}</Card.Title>
                <Card.Text>
                  <p>
                    <b>Rs:</b> {p.Price}
                  </p>
                </Card.Text>
                <button className="btn1">Click For More</button>
              </Card.Body>
            </Card>
          ))}
        </div>
  
        {/* Mappin 2 */}
  
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
          {Item2.map((b) => (
              <Card
                className="mb-3"
                style={{
                  width: "calc(25% - 20px)",
                  textAlign: "center",
                  borderRadius: 0,
                }}
              >
                <Card.Img src={b.Image} style={{ borderRadius: 0 }} />
              </Card>
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
  
        {/* Mapping 3 */}
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
          {Item3.map((t) => (
            <Card
              className="mb-3"
              style={{
                width: "calc(25% - 20px)",
                textAlign: "center",
                borderRadius: 0,
              }}
            >
              <Card.Img src={t.Image} style={{ borderRadius: 0 }} />
              <Card.Body>
                <Card.Text>
                  <h6>Rs: {t.Price}</h6>
                  <button className="btn1">View More</button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
        <Footer />
      </div>
    );
  }
  export default Fronttpage;