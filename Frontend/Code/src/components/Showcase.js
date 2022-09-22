import React from 'react'
import Destinations from '../components/Destinations'
import images from "../assets/icon.jpeg";

const Showcase = () => {
  return (
    <section className="showcase">
      <div className="showcase-overlay">
        <h1 style={{ fontSize: "80px", fontFamily: "monotype corsiva" }}>
          Debasish Travel Agency
        </h1>
        <p>
          Get to tour the world in style. Select a destination, book your
          ticket, and off you go!
        </p>
      </div>
      <div>
        <Destinations />
      </div>
      <footer id="footer1" style={{ marginTop: "0.05rem", marginLeft: "30.5rem" }}>
        <ul class="navbar-nav">
          <li>
            <b>Get connected with us on: </b>
            <img
              src={images}
              alt="My Image"
              style={{ height: "1.5rem", width: "12rem" }}
            />
          </li>
        </ul>
      </footer>
    </section>
  );
}

export default Showcase
