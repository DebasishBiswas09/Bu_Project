import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import auth from "../services/auth.service";
import Form from "react-bootstrap/Form";
import images1 from "../assets/icon.jpeg";

const Adminlogin = () => {
  const [username, setUserName] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();
  const Regi = (e) => {
    e.preventDefault();

    const val = {
      username,
      password,
    };

    auth
      .auth(val)
      .then((response) => {
        console.log("Feedback added successfully", response.data);
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("username", val.username);

        window.location.href = "/Adminprofile";
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <section className="showcase login">
      <div className="showcase-overlay">
        <form className="form-control" style={{ marginTop: "20rem" }}>
          {/* <div id="loginform">
      <Form id="form">
        <h3
          style={{
            textAlign: "center",
            textShadow: "2px 2px black",
            color: "white",
          }}
        >
          Admin LOGIN
        </h3>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label style={{ color: "white", fontSize: "45px" }}>
            USERNAME
          </Form.Label>
          <Form.Control */}
          <input
            type="text"
            placeholder="Enter Admin Name"
            required
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          {/* </Form.Group> */}

          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ color: "white", fontSize: "45px" }}>
            Password
          </Form.Label>
          <Form.Control */}
          <input
            type="password"
            placeholder="Enter Admin Password"
            required
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
          {/* </Form.Group> */}
          <button
            class="btn btn-primary"
            onClick={(e) => {
              Regi(e);
            }}
          >
            Login
          </button>
        </form>
        <div>
          <footer id="footer1" style={{ marginTop: "6rem" }}>
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
      </div>
    </section>
  );
};

export default Adminlogin;
