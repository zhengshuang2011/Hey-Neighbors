import React from 'react'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import MasksIcon from "@mui/icons-material/Masks";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ThreePIcon from "@mui/icons-material/ThreeP";
import { useNavigate } from "react-router-dom";

import Map from "../../Map/Map";
import './EventDetail.css'

function EventDetail({ event }) {

  const navigate = useNavigate();
  const handleNewRSVP = (id) => {
    navigate(`/event/${id}/rsvp`);
  };
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
            <Map event={event} />
          </div>
        </div>
      </div>
      <button className="JoinButton" onClick={() => handleNewRSVP(event.id)}>
        <ThreePIcon />
        <span> Join the Event, Send the RSVP</span>
      </button>
    </>
  )
}

export default EventDetail