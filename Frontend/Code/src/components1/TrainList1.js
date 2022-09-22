import React from "react";
import { useEffect, useState } from "react";
// import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import trainservice from "../services/trainservice";
import images from "../assets/icon.jpeg";

import { Link } from "react-router-dom";

const TrainList1 = () => {
  const [train, setTrains] = useState([]);

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
  const handleDelete = (id) => {
    console.log("Printing id", id);
    trainservice
      .remove(id)
      .then((response) => {
        console.log("Train details has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="tam">
      <div>
        <div className="container">
          {/* <h3
            style={{ color: "white", fontWeight: "bolder", fontSize: "40px" }}
          >
            List of Trains
          </h3> */}
          <hr />

          <div>
            <table
              className="table table-bordered table-dark table-striped"
              style={{ margintop: "15rem" }}
            >
              <thead className="thead-light">
                <tr>
                  <th>Train No</th>
                  <th> Train Name</th>
                  <th> Start_from</th>
                  <th> Departure_time</th>
                  <th> To_destination</th>
                  <th> Arrival_time</th>
                  <th> Price</th>
                  <th> Action</th>
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
                      <Link
                        className="btn btn-warning"
                        to={`/trainlist/edit/${trains.id}`}
                      >
                        Update
                      </Link>

                      <button
                        className="btn btn-danger ml-2"
                        onClick={() => {
                          handleDelete(trains.id);
                        }}
                      >
                        Delete
                      </button>

                      {/* <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Want to Delete?</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>If yes , Click on Delete</Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button
                            variant="danger"
                            onClick={() => {
                              handleDelete(trains.id);
                            }}
                          >
                            <Link
                              to="/Adminprofile"
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              Delete
                            </Link>
                          </Button>
                        </Modal.Footer>
                      </Modal> */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Link to="/adminprofile">
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
              marginLeft: "37.5rem",
            }}
          >
            Back{" "}
          </button>
        </Link>
        <footer
          id="footer1"
          style={{ marginTop: "12rem", marginLeft: "30.5rem" }}
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
    </section>
  );
};

export default TrainList1;
