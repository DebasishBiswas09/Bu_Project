import React from "react";
import AuthService from "../services/auth.service";
import { Link, useHistory, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import images from "../assets/icon.jpeg";
// import images1 from "../assets/images1.jpg";
//import image2 from "../assets/image2.jpg";
let p = localStorage.getItem("username");
let j = localStorage.getItem("jwt");
const Profile = () => {
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
    <section className="showcase login">
      <div className="showcase-overlay">
        <div style={{ marginTop: "200px" }}>
          <div class="grid-container1">
            <div class="item1">
              {/* <button
            style={{ marginLeft: "88rem", marginTop:"10px" }}
            className="btn btn-danger "
            onClick={() => {
              logOut();
            }}
          >
            LOGOUT
          </button> */}
              <h2
                style={{
                  fontFamily: "Hanalei Fill'",
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                Welcome Passenger!
              </h2>
              <h3
                style={{
                  color: "yellow",
                  textAlign: "center",
                  paddingTop: "10px",
                }}
              >
                <strong>{user.username}</strong>
              </h3>
            </div>
            <div class="item2">
              {" "}
              {/* <p style={{ color: "black", textAlign: "center", fontSize: "medium" }}>
            <strong>Email:</strong> {user.emailId}
          </p>
          <br></br>
          <p style={{ color: "black", textAlign: "center", fontSize: "medium" }}>
            <strong>Age:</strong> {user.age}
          </p>
          <br></br>
          <p style={{ color: "black", textAlign: "center", fontSize: "medium" }}>
            <strong>Gender:</strong> {user.gender}
          </p>
          <br></br>
          <p style={{ color: "black", textAlign: "center", fontSize: "medium" }}>
            <strong>Contact No:</strong> {user.ph_no}
          </p> */}
              <Link
                className="btn btn-success"
                to={`/bookingbyemail`}
                style={{ marginLeft: "10px", marginTop: "20px" }}
              >
                Show your Booking
              </Link>
              <Link
                className="btn btn-warning"
                to={`/Addbooking`}
                style={{ marginLeft: "15rem", marginTop: "20px" }}
              >
                Book Ticket
              </Link>
            </div>
            <div class="item3">
              <table
                className="table table-bordered table-dark table-striped"
                style={{ width: "70rem", marginTop: "30px" }}
              >
                <thead className="thead-light">
                  <tr>
                    <th> UserName</th>
                    <th> EmailId</th>
                    <th> Gender</th>
                    <th> Age</th>
                    <th> PhoneNo</th>
                    <th> Roles</th>
                    <th> Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.emailId}</td>
                    <td>{user.gender}</td>
                    <td>{user.age}</td>
                    <td>{user.ph_no}</td>
                    <td>{user.roles}</td>
                    <td>
                      <Link
                        className="btn btn-warning"
                        to={`/user/edit/${user.id}`}
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="item5">
              {" "}
              <footer id="footer1" style={{ marginTop: "220px" }}>
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
      </div>
    </section>
  );
};
export default Profile;
