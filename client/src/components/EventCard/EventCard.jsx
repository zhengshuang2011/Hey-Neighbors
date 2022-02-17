import React, { useState } from "react";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MasksIcon from "@mui/icons-material/Masks";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ThreePIcon from "@mui/icons-material/ThreeP";
import CancelIcon from "@mui/icons-material/Cancel";

import Map from "../Map/Map";

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

  // Contorl detail page
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
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
  const mask = (mask) => {
    if (mask) {
      return (
        <div className="features_m">
          <div className="items__time feature_icon">
            <MasksIcon />
          </div>
          <div className="items__time details">
            Please wear a mark to attend the event
          </div>
        </div>
      );
    } else {
      return (
        <div className="features_m_n">
          <div className="items__time feature_icon">
            <MasksIcon />
          </div>
          <div className="items__time details">No mask requirement</div>
        </div>
      );
    }
  };
  const vaccine = (vaccine) => {
    if (vaccine) {
      return (
        <div className="features_v">
          <div className="items__time feature_icon">
            <VaccinesIcon />
          </div>
          <div className="items__time details">
            Please be vaccined to attend the event
          </div>
        </div>
      );
    } else {
      return (
        <div className="features_v_n">
          <div className="items__time feature_icon">
            <VaccinesIcon />
          </div>
          <div className="items__time details">No vaccine requirement</div>
        </div>
      );
    }
  };
  return (
    <>
      <div className="items__item">
        <div class="content__preview">
          <img className="content__pic" src={event.photo_image} alt="event" />
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
            <>
              <div className="cards">
                <div href="" className="card">
                  <img src={event.photo_image} className="card__image" alt="" />
                  <div className="card__overlay">
                    <div className="card__header">
                      <svg
                        className="card__arc"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path />
                      </svg>
                      <img
                        className="card__thumb"
                        src="https://i.imgur.com/7D7I6dI.png"
                        alt=""
                      />
                      <div className="card__header-text">
                        <div className="items__details">
                          <div className="items__name">{event.event_name}</div>
                          <div className="items__time">{event.c_name}</div>
                        </div>
                        <div className="duration_number">
                          <div className="items__content">
                            <AccessTimeIcon />
                            <span>
                              {" "}
                              {event.date.substring(0, 10)} at{" "}
                              {time(event.start_at)}
                            </span>
                          </div>
                          <div className="items__content">
                            <PeopleIcon />
                            <span> Up to {event.max_people_number}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card__description">{event.description}</div>
                  </div>
                </div>

                <div className="event_details">
                  <div className="event_features">
                    {mask(event.mask)}
                    {vaccine(event.vaccine)}
                  </div>
                  <div className="card_map">
                    <Map event={event}/>
                  </div>
                </div>
              </div>
              <button className="JoinButton">
                <ThreePIcon />
                <span> Join the Event, Send the RSVP</span>
              </button>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </>
  );
}

export default EventCard;
