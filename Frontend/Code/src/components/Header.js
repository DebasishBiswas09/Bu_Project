import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
//import logo1 from "../assets/logo.png";
import AuthService from "../services/auth.service";
import trainService from "../services/trainservice";

// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
let b = localStorage.getItem("username");
let s = false;
if (b != undefined) {
  s = true;
}

const Header = () => {
  const [train, setTrain] = useState([]);
  const [train_name, setTrainName] = useState([]);
  const val = {
    train_name,
  };

  function Search() {
    localStorage.setItem("n", train_name);
    window.location.href = "/TrainDetails";
  }

  return (
    <header className="header">
      <div>
        <div
          className="logo"
          style={{ color: "red", fontStyle: "italic", paddingRight: "20px", fontSize: "26px"}}
        >
          {" "}
          DTA
        </div>
      </div>

      <nav className="navbar" style={{ height: "30px" }}>
        <ul>
          <Link className="links" to="/">
            Home
          </Link>
          <Link className="links" to="/aboutus">
            About Us
          </Link>
          <Link className="links" to="/contact">
            Contact
          </Link>
          <Link className="links" to="/Train">
            Train
          </Link>
          <Link className="links" to="/login">
            Login
          </Link>
          <Link className="links" to="/Adminlogin">
            Admin Login
          </Link>
          <Link className="links" to="/signup">
            Sign Up
          </Link>
          {s ? (
            <button
              // style={{ marginLeft: "88rem", marginTop:"10px" }}
              className="btn btn-danger "
              onClick={(e) => {
                window.location.href = "/Logout";
              }}
            >
              LOGOUT
            </button>
          ) : (
            <> </>
          )}
        </ul>
      </nav>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          value={train_name}
          onChange={(e) => setTrainName(e.target.value)}
          className="me-2"
          aria-label="Search"
          style={{ marginLeft: "200px", height: "30px", width: "190px" }}
        />

        <button
          type="button"
          style={{ width: "78px", height: "32px", textAllign: "center" }}
          class="btn btn-warning homecontactbtn1"
          onClick={Search}
        >
          Search
        </button>
      </Form>
    </header>
  );
};

export default Header;
