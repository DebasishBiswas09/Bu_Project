import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import bookingservice from "../services/bookingservice";
import images from "../assets/icon.jpeg";

const BookingList = () => {
  const [booking, setBooking] = useState([]);

  const init = () => {
    bookingservice
      .getAll()
      .then((response) => {
        console.log("Printing all booking ", response.data);
        setBooking(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);
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
  return (
    <div className="tam">
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
      <hr />
      <div
        className="tlist"
        style={{ width: "69rem", marginLeft: "8rem", marginTop: "10rem" }}
      >
        <table className="table table-bordered table-dark table-striped">
          <thead className="thead-light">
            <tr>
              <th> Train Name</th>
              <th> Train No</th>
              <th> FirstName</th>
              <th> LastName</th>
              <th> Age</th>
              <th> Start from</th>
              <th> Destination</th>
              {/* <th> Actions </th> */}
            </tr>
          </thead>
          <tbody>
            {booking.map((bookings) => (
              <tr key={bookings.id}>
                <td>{bookings.train_name}</td>
                <td>{bookings.train_no}</td>
                <td>{bookings.fname}</td>
                <td>{bookings.lname}</td>
                <td>{bookings.age}</td>
                <td>{bookings.start_from}</td>
                <td>{bookings.destination}</td>
                {/* <td>
                  {" "}
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => {
                      handleDelete(bookings.id);
                    }}
                  >
                    Delete
                  </button>
                  <Link
                    className="btn btn-warning"
                    to={`/booking/edit/${bookings.id}`}
                  >
                    Update
                  </Link>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <>
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
          style={{ marginTop: "10rem", marginLeft: "30.5rem" }}
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
      </>
    </div>
  );
};

export default BookingList;
