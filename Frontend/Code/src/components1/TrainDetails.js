import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import getByTrainName from "../services/trainservice";
import axios from "axios";
import images from "../assets/icon.jpeg";
let p = localStorage.getItem("n");
console.log(p);

const TrainDetails = () => {
  const [search, setSearch] = useState([]);
  // const[record,setRecord]=useState([]);
  const [train, setTrain] = useState("");

  // Search Item by Name

  getByTrainName.getByTrainName(p).then((response) => {
    setSearch(response.data);
  });

  return (
    <section className="showcase login">
      <div className="showcase-overlay">
        <div className="tam">
          {/* <h3
        style={{
          color: "black",
          fontWeight: "bolder",
          fontSize: "40px",
          textAlign: "center",
        }}
      >
        List of Trains
      </h3> */}

          <div className="tlist">
            <table
              className="table table-bordered table-dark table-striped"
              style={{ width: "67rem", marginTop: "19rem" }}
            >
              <thead className="thead-light">
                <tr>
                  <th> Train Name</th>
                  <th> Start From</th>
                  <th> Departure Time</th>
                  <th> To Destination</th>
                  <th> Arrival Time</th>
                  <th> Ticket Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  <tr>
                    <td>{search.train_name}</td>
                    <td>{search.start_from}</td>
                    <td>{search.departure_time}</td>
                    <td>{search.to_destination}</td>
                    <td>{search.arrival_time}</td>
                    <td>{search.price}</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
          <Link to="/">
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
                marginLeft: "3rem",
              }}
            >
              Back{" "}
            </button>
          </Link>
        </div>
        <footer id="footer1" style={{ marginTop: "16rem", marginLeft: "5rem" }}>
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
    </section>
  );
};

export default TrainDetails;
