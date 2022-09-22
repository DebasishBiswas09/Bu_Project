import React, { useState, useEffect } from "react";
import auth from "../services/auth.service";
import { Link, useNavigate, useParams } from "react-router-dom";
import images1 from "../assets/icon.jpeg";
const UserLogin = () => {
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

        window.location.href = "/profile";
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  return (
    <section className="showcase login">
      <div className="showcase-overlay">
        {/* <div class="container d-flex justify-content-center"> */}
        <form
          className="form-control"
          style={{
            //     width: "20rem",
            //     height: "12rem",
            marginTop: "20rem",
            //     marginRight: "2rem",
            //     backgroundColor: "black",
          }}
        >
          {/* <div class="form-group pt-2 pl-1"> */}
          {/* <label
              for="exampleInputName"
              style={{ fontSize: "17px", color: "white" }}
            >
              {" "}
              Enter your UserName
            </label> */}
          <input
            type="text"
            //class="form-control"
            id="exampleInputName"
            placeholder="Enter User Name"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br></br>
          {/* </div> */}

          {/* <div class="form-group pl-1"> */}
          {/* <label for="password" style={{ fontSize: "17px", color: "white" }}>
              Enter your Password
            </label> */}
          <input
            type="password"
            //class="form-control"
            id="exampleInputPassword"
            placeholder="Enter User Password"
            value={password}
            onChange={(e) => setPass(e.target.value)}
          />
          {/* </div> */}
          {/* <div> */}
          {/* <div class="row homecontactbtn"> */}
          <button
            class="btn btn-primary homecontactbtn1"
            onClick={(e) => {
              Regi(e);
            }}
            // style={{
            //   marginTop: "3rem",
            //   fontFamily: "serif",
            //   paddingTop: "10px",
            //   width: "6rem",
            //   alignItems: "center",
            //   marginLeft: "110px",
            //   fontSize: "20px",
            // }}
          >
            Login
          </button>
          {/* </div> */}
          {/* </div> */}
        </form>
        {/* </div> */}
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
    </section>
  );
};
export default UserLogin;
