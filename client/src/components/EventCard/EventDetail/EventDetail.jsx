import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import MasksIcon from "@mui/icons-material/Masks";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import ThreePIcon from "@mui/icons-material/ThreeP";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useNavigate } from "react-router-dom";

import Map from "../../Map/Map";
import "./EventDetail.css";

function EventDetail({ event, user, center }) {
  //console.log("center in eventDetail", center);

  const navigate = useNavigate();

  const handleNewRSVP = (id) => {
    if (user) {
      navigate(`/event/${id}/rsvp`);
      return;
    }
    navigate("/signIn");
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
  //console.log("Event Detail:", event);
  return (
    <>
      <div className="cards">
        <div className="event-detail-blog-card">
          <div className="event-detail-meta">
            <div
              className="event-detail-photo"
              style={{ backgroundImage: `url(${event.photo_image})` }}
            />
            <ul className="event-detail-details">
              <li className="event-detail-c">{event.c_name}</li>
            </ul>
          </div>
          <div className="event-detail-description">
            <h1>{event.event_name}</h1>
            <div className="event_detail_host pop">
              <div className="hostby">Host by</div>
              <img src={event.avatar} alt="host" className="hostimg" />
              <div className="hostname">
                {event.first_name} {event.last_name}
              </div>
            </div>

            <div className="duration_number">
              <div className="items__content">
                <AccessTimeIcon />
                <span>
                  {" "}
                  {event.date.substring(0, 10)} at {time(event.start_at)}
                </span>
              </div>
              <div className="items__content">
                <PeopleIcon />
                <span> Up to {event.max_people_number}</span>
              </div>
              <div className="items__content">
                <FmdGoodIcon />
                <span>
                  {" "}
                  {event.city}, {event.province}, {event.country}
                </span>
              </div>
            </div>
            <div className="card__description_titel">Description</div>
            <div className="card__description">{event.description}</div>
          </div>
        </div>

        {/* <div href="" className="card-detail">
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
        </div> */}

        <div className="event_details">
          <div className="event_features">
            {mask(event.mask)}
            {vaccine(event.vaccine)}
          </div>
          <div className="event_det_map_pop">
            <Map event={event} center={center} />
          </div>
        </div>
      </div>
      <button className="JoinButton" onClick={() => handleNewRSVP(event.id)}>
        <ThreePIcon />
        {user && <span> Join the Event, Send the RSVP</span>}
        {!user && <span> Please Login First</span>}
      </button>
    </>
  );
}

export default EventDetail;
