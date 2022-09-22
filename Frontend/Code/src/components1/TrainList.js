import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../assets/icon.jpeg";

import trainservice from "../services/trainservice";
let p = localStorage.getItem("jwt");
const TrainList = () => {
  const [train, setTrains] = useState([]);
  const booking = (p) => {
    if (!p) {
      window.alert("please login before you want to book tickets!");
    } else {
      window.location.href = "/login";
    }
  };
  const init = () => {
    trainservice
      .getAll()
      .then((response) => {
        console.log("Printing train data", response.data);
        setTrains(response.data);
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
        <div className="tam">
          {/* <h3
            style={{
              color: "black",
              fontWeight: "bolder",
              fontSize: "30px",
              textAlign: "center",
            }}
          >
            List of Trains
          </h3>
          <hr /> */}
          <div style={{ marginTop: "12rem" }}>
            <table
              className="table table-bordered table-dark table-striped"
              style={{ width: "69rem", marginLeft: "3rem" }}
            >
              <thead className="thead-dark">
                <tr>
                  <th>train_no</th>
                  <th> train_name</th>
                  <th> start_from</th>
                  <th> departure_time</th>
                  <th> to_destination</th>
                  <th> arrival_time</th>
                  <th> price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {train.map((trains) => (
                  <tr key={trains.id}>
                    <td>{trains.train_no}</td>
                    <td>{trains.train_name}</td>
                    <td>{trains.start_from}</td>
                    <td>{trains.departure_time}</td>
                    <td>{trains.to_destination}</td>
                    <td>{trains.arrival_time}</td>
                    <td>{trains.price}</td>
                    <td>
                      <button
                        className="btn btn-success ml-2"
                        onClick={() => booking(p)}
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <>
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
                }}
              >
                Back{" "}
              </button>
            </Link>
          </>
        </div>
        <footer id="footer1" style={{ marginTop: "9rem" }}>
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

export default TrainList;
