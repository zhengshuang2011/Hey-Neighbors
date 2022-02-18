import React from 'react'

function SideEventDetail() {
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
          <div className="sidebar__text">user.first_name</div>
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
            <div className="widget__body">
              {/* Loop the item*/}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideEventDetail