import React from "react";
import "./Preview.css";
import EventCard from "../EventCard/EventCard";

function Preview({ user, events, center }) {
  const eventsList = events.map((event) => (
    <EventCard event={event} key={event.id} {...event} center={center} />
  ));

  return (
    <div className="sidebar__container">
      <div className="sidebar__head">
        <div className="sidebar__preview">
          <img className="sidebar__pic" src={user.avatar} alt="User" />
        </div>
        <div className="sidebar__wrap">
          <div className="sidebar__title">
            Hey<span style={{ color: "#5E81F4" }}> Neighbors</span>
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
              <div className="widget__title title">Preview Events</div>
            </div>
            <div className="widget__body">
              {/* Loop the item*/}
              {eventsList}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
