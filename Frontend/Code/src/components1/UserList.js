import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import userservice from "../services/userservice";
import images from "../assets/icon.jpeg";

const UserList = () => {
  const [user, setUsers] = useState([]);

  const init = () => {
    userservice
      .getAll()
      .then((response) => {
        console.log("Printing user data", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <div className="container">
      {/* <h3 style={{ color: "black", fontWeight: "bolder", fontSize: "40px" }}>
        List of Users
      </h3>
      <hr /> */}
      <div>
        <table
          className="table table-bordered table-dark table-striped"
          style={{ marginTop: "10rem" }}
        >
          <thead className="thead-light">
            <tr>
              <th> UserName</th>
              <th> EmailId</th>
              {/* <th> Password</th> */}
              <th> Age</th>
              <th> Gender</th>
              <th> PhoneNo</th>
              <th> Roles</th>
            </tr>
          </thead>
          <tbody>
            {user.map((users) => (
              <tr key={users.id}>
                <td>{users.username}</td>
                <td>{users.emailId}</td>
                {/* <td>{users.password}</td> */}
                <td>{users.age}</td>
                <td>{users.gender}</td>
                <td>{users.ph_no}</td>
                <td>{users.roles}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/Adminprofile">
          <button
            className="bckc"
            style={{
              padding: "10px 60px",
              background: "#2c7f86",
              border: "0",
              outline: "none",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              borderRadius: " 30px",
              marginLeft: "30.5rem",
            }}
          >
            Back{" "}
          </button>
        </Link>
        <footer
          id="footer1"
          style={{ marginTop: "10rem", marginLeft: "23.5rem" }}
        >
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
  );
};

export default UserList;
