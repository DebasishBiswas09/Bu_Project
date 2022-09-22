import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import getbookingEmail from "../services/userservice";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import bookingservice from "../services/bookingservice";
import Modal from "react-bootstrap/Modal";
import images from "../assets/icon.jpeg";

const Bookingbyemail = () => {
  const [booking, setBooking] = useState([]);

  const [emailId, setEmailId] = useState(" ");
  const handleDelete = (id) => {
    console.log("Printing id", id);
    bookingservice
      .remove(id)
      .then((response) => {
        console.log("Booking has been Deleted", response.data);
        init();
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };
  const init = (emailId) => {
    getbookingEmail.getBookingByemail(emailId).then((response) => {
      if (response.data == "") {
        window.alert("EmailId doesnt exist!");
      }
      console.log("Printing all booking ", response.data);
      setBooking(response.data);
    });
    // .catch((error) => {
    //   console.log("Something went wrong", error);
    //   window.alert("EmailId doesnt exist!");
    // });
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section className="showcase login">
      <div className="showcase-overlay">
        <div class="form-control" style={{ marginTop: "9rem" }}>
          {/* <div className="tam"> */}
          {/* <div class="form-group pt-2 pl-1"> */}
          <label
            for="exampleInputName"
            style={{
              fontSize: "30px",
              color: "yellow",
              // textAlign: "center",
              marginLeft: "-68rem",
              fontWeight: "bolder",
            }}
          >
            Enter Your Email
          </label>
          <br></br>
          <br></br>
          <input
            type="email"
            placeholder="Your Email ID"
            //class="form-control"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            style={{
              width: "17.7rem",
              height: "2rem",
              marginLeft: "-65em",
              marginTop: "-5px",
            }}
          />
          <br></br>
          {/* </div> */}
          <Button
            onClick={() => init(emailId)}
            //variant=" #2c7f86;"
            type="submit"
            id="submit"
            style={{ marginLeft: "-65rem", width: "17.7rem", height: "2.5rem" }}
          >
            Find Booking
          </Button>
          {/* <h3
        style={{
          color: "black",
          fontWeight: "bolder",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        List of Booking
      </h3> */}
        </div>
        <hr />
        <div className="tlist">
          <table
            className="table table-bordered table-dark table-striped"
            style={{ width: "69rem", marginTop: "-85px" }}
          >
            <thead className="thead-light">
              <tr>
                <th> Train Name</th>
                <th> Train No</th>
                <th> FirstName</th>
                <th> LastName</th>
                <th> Age</th>
                <th> Start from</th>
                <th> Destination</th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
              {
                <tr key={booking.id}>
                  <td>{booking.train_name}</td>
                  <td>{booking.train_no}</td>
                  <td>{booking.fname}</td>
                  <td>{booking.lname}</td>
                  <td>{booking.age}</td>
                  <td>{booking.start_from}</td>
                  <td>{booking.destination}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-danger ml-2"
                      onClick={handleShow}
                    >
                      Delete
                    </button>
                    <Modal show={show} onHide={handleClose}>
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
                            handleDelete(booking.id);
                          }}
                        >
                          <Link
                            to="/profile"
                            style={{ color: "white", textDecoration: "none" }}
                          >
                            Delete
                          </Link>
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
        <Link to="/profile">
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
        {/* </div> */}
        <footer id="footer1" style={{ marginTop: "9.5rem" }}>
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

export default Bookingbyemail;
