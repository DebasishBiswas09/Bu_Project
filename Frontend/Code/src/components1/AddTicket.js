import React from "react";
import { useEffect, useState } from "react";
import AuthService from "../services/auth.service";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bookingservice from "../services/bookingservice";
let p = localStorage.getItem("username");
const Addticket = () => {
  const [coach_no, setCoach] = useState("");
  const [user, setFaculty] = useState([]);
  const [seat_no, setSeat] = useState("");
  const [emailId, setEmailId] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

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
  const saveTicket = (e) => {
    e.preventDefault();

    const ticket = { coach_no, seat_no, emailId, id };

    if (id) {
      //update
      bookingservice
        .update(ticket)
        .then((response) => {
          console.log("ticket data updated successfully", response.data);
          localStorage.setItem("coach_no", ticket.coach_no);
          localStorage.setItem("seat_no", ticket.seat_no);

          window.location.href = "/fullticket";
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    } else {
      // create
      bookingservice
        .createTicket(ticket)
        .then((response) => {
          console.log("ticket added successfully", response.data);
          localStorage.setItem("coach_no", ticket.coach_no);
          localStorage.setItem("seat_no", ticket.seat_no);

          window.location.href = "/fullticket";
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  };

  useEffect(() => {
    if (id) {
      bookingservice
        .get(id)
        .then((tickets) => {
          setCoach(tickets.data.coach_no);
          setSeat(tickets.data.seat_no);
          setEmailId(tickets.data.emailId);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);

  return (
    <>
      <section className="showcase login">
        <div className="showcase-overlay">
          <form className="form-control">
            <input
              type="text"
              placeholder="CoachNo"
              value={coach_no}
              onChange={(e) => setCoach(e.target.value)}
            />
            <input
              type="number"
              placeholder="Enter SeatNo"
              value={seat_no}
              onChange={(e) => setSeat(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter EmailId"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />

            <Button
              onClick={(o) => saveTicket(o)}
              //variant=" #2c7f86;"
              type="submit"
              id="submit"
            >
              Confirm Ticket
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Addticket;
