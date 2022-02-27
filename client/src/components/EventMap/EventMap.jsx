import React, { useState, useRef, useEffect } from "react";
import EventCard from "../EventCard/EventCard";
import Map from "../Map/Map";
import { useNavigate } from "react-router-dom";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import "./EventMap.css";

function EventMap({ events, user, center, setCenter }) {
  //console.log("eventmap", events);
  const navigate = useNavigate();

  const eventsRef = useRef([]);

  // const [center, setCenter] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    eventsRef.current = eventsRef.current.slice(0, events.length);
  }, [events]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const handleNewEvent = () => {
    navigate("/newevent");
  };

  const handleClick = (index) => {
    eventsRef.current[index].scrollIntoView({ behavior: "smooth" });
  };

  const eventsList = events.map((event, index) => (
    <EventCard
      center={center}
      user={user}
      event={event}
      key={event.id}
      {...event}
      eventRef={(el) => (eventsRef.current[index] = el)}
      onClick={(e) => {
        setSelectedEvent(event);
      }}
    />
  ));

  console.log("selectedEvent is ", selectedEvent);

  return (
    <>
      {/* panel*/}
      <div className="panel" style={{ background: "#F6F6FA" }}>
        {/* messages*/}
        <div className="messages">
          <div className="messages__layout">
            <div className="messages__sidebar">
              {user && (
                <div className="messages__head mobile-hide">
                  <button className="neweventButton" onClick={handleNewEvent}>
                    <i className="la la-pencil-alt " />
                    <span> New Event</span>
                  </button>

                  {/* Sort by */}

                  {/* <div className="sort js-sort">
                  <div className="sort__head js-sort-head">
                    <div className="sort__icon">
                      <i className="la la-filter " />
                    </div>
                    <div className="sort__label">sort:</div>
                    <div className="sort__selected js-sort-selected">Location</div>
                    <div className="sort__arrow">
                      <i className="la la-angle-down " />
                    </div>
                  </div>
                  <div className="sort__dropdown js-sort-dropdown">
                    <div className="sort__title">Sort projects by</div>
                    <div className="sort__items">
                      <div className="sort__item">
                        <label className="switch sort__switch js-sort-switch">
                          <input
                            className="switch__input"
                            type="radio"
                            name="sort"
                            defaultChecked="checked"
                          />
                          <span className="switch__content">A-Z</span>
                        </label>
                      </div>

                      <div className="sort__item">
                        <label className="switch sort__switch js-sort-switch">
                          <input
                            className="switch__input"
                            type="radio"
                            name="sort"
                          />
                          <span className="switch__content">Assigned Tasks</span>
                        </label>
                      </div>
                      <div className="sort__item">
                        <label className="switch sort__switch js-sort-switch">
                          <input
                            className="switch__input"
                            type="radio"
                            name="sort"
                          />
                          <span className="switch__content">Progress</span>
                        </label>
                      </div>
                      <div className="sort__item">
                        <label className="switch sort__switch js-sort-switch">
                          <input
                            className="switch__input"
                            type="radio"
                            name="sort"
                          />
                          <span className="switch__content">Date Created</span>
                        </label>
                      </div>
                    </div>
                    <div className="sort__foot">
                      <button className="sort__btn btn btn_light js-sort-apply">
                        Apply
                      </button>
                    </div>
                  </div>
                  <div className="sort__backdrop backdrop js-sort-backdrop" />
                </div> */}
                </div>
              )}
              <div className="messages__body">
                {/* items*/}
                <div className="items items_stroke">
                  {/* <EventCard /> */}
                  {eventsList}
                </div>
              </div>
            </div>
            <div className="messages__container">
              <div className="messages__head map_head">
                <button className="messages__back back">
                  <i className="la la-angle-left " />
                  Map Details
                </button>
              </div>
              <div className="messages__body map_body">
                <Map
                  events={events}
                  event={selectedEvent}
                  eventsRef={eventsRef}
                  handleClick={handleClick}
                  center={center}
                  pinnedInitialCenter={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventMap;
