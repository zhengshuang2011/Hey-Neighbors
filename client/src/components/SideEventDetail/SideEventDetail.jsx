import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import MasksIcon from "@mui/icons-material/Masks";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import Map from "../Map/Map";
import "./SideEventDetail.css";

function SideEventDetail({ user, event, center }) {
  console.log(event);

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
    <div className="sidebar__container">
      <div className="sidebar__head">
        {user && (
          <div className="sidebar__preview">
            <img className="sidebar__pic" src={user.avatar} alt="User" />
          </div>
        )}
        <div className="sidebar__wrap">
          <div className="sidebar__title">
            Hey<span style={{ color: "#5E81F4" }}> Neigbors</span>
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
              <div className="widget__title title">Event Details</div>
            </div>
            <div className="widget__body event_de_small">
              {/* item*/}
              <div className="event_detail">
                <img
                  src={event.photo_image}
                  className="event_detail_img"
                  alt=""
                />
                <div className="event_detail_name">{event.event_name}</div>
                <div className="event_detail_host">
                  <div className="hostby">Host by</div>
                  <img src={event.avatar} alt="host" className="hostimg" />
                  <div className="hostname">
                    {event.first_name} {event.last_name}
                  </div>
                </div>
                <div className="date_people">
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
                </div>
                <div className="event_des">
                  <div className="event_des_tital">Description:</div>
                  <div className="event_des_content">{event.description}</div>
                </div>
              </div>

              <div className="event_details">
                <div className=" event_det_f">
                  {mask(event.mask)}
                  {vaccine(event.vaccine)}
                </div>
                <div className="event_det_map">
                  <Map event={event} center={center} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideEventDetail;
