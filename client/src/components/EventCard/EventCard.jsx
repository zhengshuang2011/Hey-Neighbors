import React from "react";
import Box from "@mui/material/Box";
import eventImg from "../../assets/HappyEyes.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import "./EventCard.css";

const commonStyles = {
  bgcolor: "background.paper",
  m: 1,
  borderColor: "#C4C4C4",
  width: "auto",
  height: "0.5rem",
};
function EventCard({ event }) {
  console.log("event in eventCard.jsx = ", event);

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
  return (
    <>
      <div className="items__item" href="#">
        {/* <div className="items__fav stroke active">
        <i className="la la-star " />
      </div> */}

        <div class="content__preview">
          <img class="content__pic" src={eventImg} alt="event" />
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
            <span>
              Address: {event.street}, {event.city}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
