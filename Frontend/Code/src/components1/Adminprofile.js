import React from "react";
import AuthService from "../services/auth.service";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import images from "../assets/icon.jpeg";

//import image1 from "../assets/image1.jpeg";
let p = localStorage.getItem("username");
let j = localStorage.getItem("jwt");
const Adminprofile = () => {
  const navigate = useNavigate();
  const logOut = () => {
    AuthService.logout();
    navigate("/");
  };
  const [user, setFaculty] = useState([]);
  const init = () => {
    AuthService.getUser(p)
      .then((response) => {
        console.log("Printing faculty data", response.data);
        setFaculty(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <section className="Adlogin" >
      {/* <div className="showcase-overlay"> */}
        <div>
          <div class="grid-container1">
            <div class="item1">
              <h2
                style={{
                  fontFamily: "monotype corsiva",
                  textAlign: "center",
                  color: "#000066",
                }}
              >
                Welcome to Dashboard
              </h2>
              <h3
                style={{
                  color: "green",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                <strong>{user.username}</strong>
              </h3>
            </div>
            <div class="item2">
              {" "}
              <p
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "small",
                }}
              >
                <strong>Email:</strong> {user.emailId}
              </p>
              {/* <br></br> */}
              <p
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "small",
                }}
              >
                <strong>Age:</strong> {user.age}
              </p>
              {/* <br></br> */}
              <p
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "small",
                }}
              >
                <strong>Gender:</strong> {user.gender}
              </p>
              {/* <br></br> */}
              <p
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "small",
                }}
              >
                <strong>Contact No:</strong> {user.ph_no}
              </p>
              <br></br>
              <Link
                className="btn btn-warning"
                to={`/Booking`}
                style={{ marginLeft: "3rem" }}
              >
                View Booking
              </Link>
              <Link
                className="btn btn-success"
                to={`/User`}
                style={{ marginLeft: "1rem" }}
              >
                View Users
              </Link>
              <Link
                className="btn btn-primary"
                to={`/addTrain`}
                style={{ marginLeft: "1rem" }}
              >
                Add Trains
              </Link>
            <Link
                className="btn btn-secondary"
                to={`/Trainlist1`}
                style={{ marginLeft: "1rem" }}
              >
                Train List
              </Link>
            </div>
            <div class="item3">
              <table
                className="table table-bordered table-dark table-striped"
                style={{ width: "80rem", marginLeft: "3rem" }}
              >
                <thead className="thead-light">
                  <tr>
                    <th> UserName</th>
                    <th> EmailId</th>
                    <th> Gender</th>
                    <th> Age</th>
                    <th> PhoneNo</th>
                    <th> Roles</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={user.username}>
                    <td>{user.username}</td>
                    <td>{user.emailId}</td>
                    <td>{user.age}</td>
                    <td>{user.gender}</td>
                    <td>{user.ph_no}</td>
                    <td>{user.roles}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="item5" style={{ height: "3.5rem" }}>
              {" "}
              <footer id="footer1" style={{ marginTop: "9rem", marginLeft:"30.5rem" }}>
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
        </div>
      {/* </div> */}
    </section>
  );
};
export default Adminprofile;
