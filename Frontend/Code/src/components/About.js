import React from "react";
import images from "../assets/icon.jpeg";

const About = () => {
  return (
    <section className="showcase login">
      <div className="showcase-overlay">
        <div
          classname="main"
          style={{
            //backgroundImage: "url("image.jpg")",
            backgroundSize: "cover",
            height: "89vh",
            backdropFilter: "blur",
          }}
        >
          <section className="section">
            <div className="container">
              <div className="underline">
                <div class="pr">
                  <marquee
                    style={{
                      fontSize: "36px",
                      fontFamily: "monotype corsiva",
                      marginTop: "4.5rem",
                    }}
                  >
                    Passengers are Our first and foremost Priority
                  </marquee>
                </div>
              </div>
            </div>
          </section>
          <div class="grid">
            <div class="item" id="vision">
              <br></br>
              <u
                style={{
                  fontSize: "36px",
                  fontFamily: "monotype corsiva",
                  marginTop: "0rem",
                }}
              >
                {" "}
                Our Vision{" "}
              </u>
              <br></br>
              {/* <br></br> */}
              <b
                class="para"
                style={{
                  textalign: "justify",
                  paddingleft: "10px",
                  paddingright: "10px",
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                "Online Railway Reservation microservice leads to perform Online
                reservation of<br></br> railway tickets. Customers at first
                register with their details and can reserve<br></br> their seats
                and perform various operations "
              </b>
            </div>
            <div class="item" id="mision">
              <br></br>
              <u style={{ fontSize: "36px", fontFamily: "monotype corsiva" }}>
                {" "}
                Our Mission{" "}
              </u>
              <br></br>
              {/* <br></br> */}
              <b
                class="para"
                style={{
                  textalign: "justify",
                  paddingleft: "10px",
                  paddingright: "10px",
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                "Our main aim or mission is to help passengers to check the
                train status,<br></br> booking a ticket, cancelling a ticket,
                and to observe arrival and<br></br> departure time of trains."
              </b>
            </div>
            <div class="item" id="core">
              <br></br>
              <u style={{ fontSize: "36px", fontFamily: "monotype corsiva" }}>
                {" "}
                Our Core Values{" "}
              </u>
              <br></br>
              {/* <br></br> */}
              <b
                class="para"
                style={{
                  textalign: "justify",
                  paddingleft: "10px",
                  paddingright: "10px",
                  color: "white",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                }}
              >
                "Online Railway Reservation Microservice will perform various
                operations like reservation, cancel a booking, look out for help
                and so on.<br></br> Passengers can first register themselves and
                then they can perform all the operations. A person can check
                <br></br> the train timings, train fares and other trains
                information without login "
              </b>
            </div>
          </div>
          <footer id="footer1" style={{ marginTop: "4.05rem" }}>
            <ul class="navbar-nav">
              <li>
                <b>Get connected with us on: </b>
                <img
                  src={images}
                  alt="My Image"
                  style={{ height: "1.5rem", width: "14rem" }}
                />
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default About;
