import React from 'react'
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import PeopleIcon from "@mui/icons-material/People";
// import MasksIcon from "@mui/icons-material/Masks";
// import VaccinesIcon from "@mui/icons-material/Vaccines";
// import Map from "../Map/Map";

function SideEventDetail() {
  // console.log("event in eventCard.jsx = ", event);
  // const time = (start_at) => {
  //   const timeNumber = Number(start_at.substring(0, 2));
  //   if (timeNumber < 12) {
  //     return `${timeNumber} AM`;
  //   } else if (timeNumber === 12) {
  //     return `${timeNumber} PM`;
  //   } else if (timeNumber === 24) {
  //     return `${timeNumber - 12} AM`;
  //   } else {
  //     return `${timeNumber - 12} PM`;
  //   }
  // };
  // const mask = (mask) => {
  //   if (mask) {
  //     return (
  //       <div className="features_m">
  //         <div className="items__time feature_icon">
  //           <MasksIcon />
  //         </div>
  //         <div className="items__time details">
  //           Please wear a mark to attend the event
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="features_m_n">
  //         <div className="items__time feature_icon">
  //           <MasksIcon />
  //         </div>
  //         <div className="items__time details">No mask requirement</div>
  //       </div>
  //     );
  //   }
  // };
  // const vaccine = (vaccine) => {
  //   if (vaccine) {
  //     return (
  //       <div className="features_v">
  //         <div className="items__time feature_icon">
  //           <VaccinesIcon />
  //         </div>
  //         <div className="items__time details">
  //           Please be vaccined to attend the event
  //         </div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="features_v_n">
  //         <div className="items__time feature_icon">
  //           <VaccinesIcon />
  //         </div>
  //         <div className="items__time details">No vaccine requirement</div>
  //       </div>
  //     );
  //   }
  // };
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
              {/* <div className="cards">
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
              </div> */}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideEventDetail