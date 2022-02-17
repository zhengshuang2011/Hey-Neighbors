import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import "./CheckRsvp.css";
import axios from "axios";

const commonStyles = {
  m: 1,
  borderColor: "#C4C4C4",
  width: "auto",
  height: "0.5rem",
};

function CheckRsvp({ applications, user }) {
  const number = applications.length;
  const hanldeReject = (e) => {
    e.preventDefault();
    axios.delete();
  };

  const application_list = applications.map((a) => (
    <div className="items loop" key={a.id}>
      <div className="items__item" href="">
        <div className="items__preview">
          <img className="items__pic" src="img/user-3.jpg" alt="User" />
          <div className="items__online online" />
        </div>
        <div className="items__wrap">
          <div className="items__details">
            <div className="items__name">
              {a.first_name} {a.last_name}
            </div>
            <div className="items__time">{a.people_number} people</div>
          </div>
          <div className="items__details">
            <div className="items__name">Applied to </div>
            <div className="items__time">{a.event_name}</div>
          </div>
          <div className="items__details">
            <div className="items__name">Email </div>
            <div className="items__time">{a.email}</div>
          </div>
          {a.vaccine && (
            <div className="items__details">
              <div className="items__name">Vaccined </div>
              <div className="items__time">Yes</div>
            </div>
          )}
          <Box sx={{ ...commonStyles, borderTop: 1 }} />
          <div className="items__content discription">{a.description}</div>

          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              startIcon={<BookmarkRemoveIcon />}
              onClick={hanldeReject}
            >
              Reject
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Accept
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  ));

  return (

    <div className="sidebar__container">
      <div className="sidebar__head">
        <div className="sidebar__preview">
          <img className="sidebar__pic" src="img/user-2.jpg" alt="User" />
        </div>
        <div className="sidebar__wrap">
          <div className="sidebar__title">
            Hey<span style={{ color: "#00AF91" }}> Neigbors</span>
          </div>
          <div className="sidebar__text">{user.first_name}</div>
        </div>
        <button className="sidebar__action">
          <i className="la la-angle-left " />
        </button>
      </div>
      <div className="sidebar__inner">
        <div className="sidebar__section">
          {/* widget*/}
          <div className="widget">
            <div className="widget__head widget__head_line">
              <div className="widget__title title">Incoming Participants</div>
              <div className="widget__badge badge green">{number}</div>
            </div>
            <div className="widget__body">
              {/* Loop the item*/}
              {application_list}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CheckRsvp;
