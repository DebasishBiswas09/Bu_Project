import React from "react";
import images1 from "../assets/icon.jpeg";

const Contact = () => {
  return (
    <>
      <section className="showcase login">
        <div className="showcase-overlay">
          <form className="form-control" style={{ marginTop: "16rem" }}>
            <b
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "monotype corsiva",
              }}
            >
              Name: Debasish Travel Agency
            </b>
            <br></br>
            <b
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "monotype corsiva",
              }}
            >
              Mobile No: 1234567898
            </b>
            <br></br>
            <b
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "monotype corsiva",
              }}
            >
              Email id: dta@gmail.com
            </b>
            <br></br>
            <b
              style={{
                color: "white",
                fontSize: "40px",
                fontFamily: "monotype corsiva",
              }}
            >
              Facebook: Debasish Travel Agency
            </b>
            <br></br>
          </form>
          <footer id="footer1" style={{ marginTop: "10rem" }}>
            <ul class="navbar-nav">
              <li>
                <b>Get connected with us on: </b>
                <img
                  src={images1}
                  alt="My Image"
                  style={{ height: "1.5rem", width: "14rem" }}
                />
              </li>
            </ul>
          </footer>
        </div>
      </section>
    </>
  );
};

export default Contact;
