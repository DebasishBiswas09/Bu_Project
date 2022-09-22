import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory, useNavigate } from "react-router-dom";
import getfaculty from "../services/auth.service";
let p = localStorage.getItem("username");

const Customerlist = () => {
  const navigate = useNavigate();
  // const history = useHistory();
  const [user, setFaculty] = useState([]);
  const logOut = () => {
    getfaculty.logout();
    navigate("/");
  };

  const init = () => {
    getfaculty
      .getUser(p)
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

  // Remove
  //   const handleDelete = (sid) => {
  //     console.log("Printing UserName", sid);
  //     getfaculty
  //       .getUser(sid)
  //       .then((response) => {
  //         console.log("faculty deleted successfully", response.data);
  //         init();
  //       })
  //       .catch((error) => {
  //         console.log("Something went wrong", error);
  //       });
  //   };

  return (
    <div className="container">
      <h3 style={{ color: "black", fontWeight: "bolder", fontSize: "40px" }}>
        List of Users
      </h3>
      <hr />
      <div>
        <table className="table table-bordered table-dark table-striped">
          <thead className="thead-light">
            <tr>
              <th> UserName</th>
              <th> EmailId</th>
              <th> PassWord</th>
              <th> Age</th>
              <th> Gender</th>
              <th> PhoneNo</th>
              <th> Roles</th>
              <th>Want to logout?</th>
            </tr>
          </thead>
          <tbody>
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>{user.emailId}</td>
              <td>{user.password}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.ph_no}</td>
              <td>{user.roles}</td>
              <td>
                {" "}
                <button
                  className="btn btn-danger ml-2"
                  onClick={() => {
                    logOut();
                  }}
                >
                  LOGOUT
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customerlist;