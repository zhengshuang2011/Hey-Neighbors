import React, { useState } from "react";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

import CancelIcon from "@mui/icons-material/Cancel";



import "./EventCard.css";
//import SideEventDetail from "../SideEventDetail/SideEventDetail";
import EventDetail from "./EventDetail/EventDetail";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "#C4C4C4",
  width: "auto",
  height: "0.5rem",
};


const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          <CancelIcon color="action" />
        </span>
        {props.content}
      </div>
    </div>
  );
};



function EventCard({ event, onClick, eventRef }) {


  const time = (start_at) => {
    const timeNumber = Number(start_at.substring(0, 2));
    if (timeNumber < 12) {
      return `${timeNumber} AM`;
    } else if (timeNumber === 12) {
      return `${timeNumber} PM`;
    } else if (timeNumber === 24) {
      return `${timeNumber - 12} AM`;
    } else {
      return `${timeNumber - 12} PM`;
    }
  };

  // Control detail page
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };



  // Handle RSVP



  return (
    <>
      <div className="items__item" onClick={onClick} ref={eventRef}>
        <div className="pic_border">
          {/* className=content__preview  */}
          <img
            className="content__pic pic_size"
            src={event.photo_image}
            alt="event"
          />
        </div>
        <div className="items__wrap">
          <div className="items__details">
            <div className="items__name">{event.event_name}</div>
            <div className="items__time">{event.c_name}</div>
          </div>
          <div className="duration_number">
            <div className="items__content">
              <AccessTimeIcon />
              <span>
                {event.date.substring(0, 10)} at {time(event.start_at)}
              </span>
            </div>
            <div className="items__content">
              <PeopleIcon />
              <span> Up to {event.max_people_number}</span>
            </div>
          </div>
          <Box sx={{ ...commonStyles, borderTop: 1 }} />
          <div className="duration_number items__content">
            <FmdGoodIcon />
            <span>City: {event.city}</span>
          </div>
          <button
            className="more_info"
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          >
            More Info
          </button>
        </div>
      </div>

      {isOpen && (
        <Popup
          content={
            <EventDetail event={event} />}
          handleClose={togglePopup}
        />
      )}
    </>
  );
}

export default EventCard;
