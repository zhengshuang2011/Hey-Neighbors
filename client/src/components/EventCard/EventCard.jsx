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
function EventCard() {
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
            <div className="items__name">Event Titel </div>
            <div className="items__time">Category</div>
          </div>
          <div className="duration_number">
            <div className="items__content">
              <AccessTimeIcon />
              <span> March 10 at 4pm</span>
            </div>
            <div className="items__content">
              <PeopleIcon />
              <span> Up to 10</span>
            </div>
          </div>
          <Box sx={{ ...commonStyles, borderTop: 1 }} />
          <div className="duration_number items__content">
            <FmdGoodIcon />
            <span> Address: city name</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventCard;
