import React from 'react'
import "./Preview.css"
//import EventCard from '../EventCard/EventCard';


function Preview() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__head">
        <div className="sidebar__preview">
          <img
            className="sidebar__pic"
            src="img/user-2.jpg"
            alt="User"
          />
        </div>
        <div className="sidebar__wrap">
          <div className="sidebar__title">Hey<span style={{ color: '#00AF91' }}> Neigbors</span></div>
          <div className="sidebar__text">Miranda</div>
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
              {/* <EventCard /> */}
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Preview