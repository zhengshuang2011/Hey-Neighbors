import React from "react";
import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import ArchiveIcon from "@mui/icons-material/Archive";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/Cancel";

import "./BookingList.css";

function BookingList({ incoming_events, completed_events, attenders }) {
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

  const FindAttendersByEventId = (array, id) => {
    const output = [];
    for (let a of array) {
      if (a.event_id === id && a.status_id === 2) {
        output.push(a);
      }
    }
    return output;
  };

  const incoming_list = incoming_events.map((event) => {
    const avartList = FindAttendersByEventId(attenders, event.id).map(
      (attender) => (
        <div className="members__item">
          <img className="members__pic" src={attender.avatar} alt="User" />
        </div>
      )
    );
    const number = FindAttendersByEventId(attenders, event.id).length;
    return (
      <div className="data__item booking_incoming" key={event.id}>
        {/* <div className="data__corner">      
          <Stack direction="row" spacing={1}>
            <IconButton aria-label="cancel">
              <CancelIcon />
            </IconButton>
          </Stack>
        </div> */}
        <div className="data__row">
          <div className="data__cell">
            <div className="data__main">
              <div className="booking_img">
                <img class="content__pic" src={event.photo_image} alt="Event" />
              </div>
              <div className="data__wrap">
                <div className="data__content">
                  <strong>{event.event_name}</strong>
                </div>
                <div className="data__label">
                  <strong>{event.c_name}</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="data__cell">
            <div className="data__label">
              <div>
                <AccessTimeIcon />
                {event.date.substring(0, 10)} at {time(event.start_at)}
              </div>
              <div>
                <PeopleIcon />
                Up to {event.max_people_number}
              </div>
              <div>
                <FmdGoodIcon />
                City: {event.city}
              </div>
            </div>
          </div>
          <div className="data__cell">
            {/* members*/}
            <div className="members data__members">
              {avartList}
              <div className="members__item">
                <div className="members__counter">{number}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const completed_list = completed_events.map((event) => (
    <div className="data__item" key={event.id}>
      <div className="data__row">
        <div className="data__cell data__cell_lg">
          <div className="data__main">
            <div className="event_img_list ">
              <img class="content__pic" src={event.photo_image} alt="Event" />
            </div>
            <div className="data__wrap booking_history">
              <div className="data__content">
                <strong>{event.event_name}</strong>
              </div>
              <div className="data__label">{event.c_name}</div>
            </div>
          </div>
        </div>
        <div className="data__cell mobile-text-right">
          <div className="data__label">
            <AccessTimeIcon />
          </div>
          <div className="data__label">
            <strong>
              {event.date.substring(0, 10)} at {time(event.start_at)}
            </strong>
          </div>
        </div>
        <div className="data__cell mobile-hide">
          <div className="data__label">
            <PeopleIcon />
          </div>
          <div className="data__label">
            <strong> Up to {event.max_people_number}</strong>
          </div>
        </div>
        <div className="data__cell mobile-hide">
          <div className="data__label">
            <FmdGoodIcon />
          </div>
          <div className="data__label">
            <strong> City: {event.city}</strong>
          </div>
        </div>
        {/* <div className="data__cell data__cell_members mobile-hide">
          
          <div className="members">
            <div className="members__item">
              <img className="members__pic" src="img/user-1.jpg" alt="User" />
            </div>
            <div className="members__item">
              <img className="members__pic" src="img/user-2.jpg" alt="User" />
            </div>
            <div className="members__item">
              <img className="members__pic" src="img/user-3.jpg" alt="User" />
            </div>
            <div className="members__item">
              <div className="members__counter">+5</div>
            </div>
          </div>
        </div> */}
        {/* <div className="data__cell data__cell_action mobile-hide">
          <Button variant="outlined" startIcon={<ArchiveIcon />}>
            Archive
          </Button>
        </div> */}
      </div>
    </div>
  ));
  return (
    <>
      <div className="panel js-panel">
        <div className="panel__head panel__head_line">
          {/* btn group*/}
          <div className="panel__group btn-group btn-group_tabs">
            <button className="btn btn_light btn_icon js-panel-btn active">
              <i className="la la-border-all " />
              Incoming Events
            </button>
          </div>
        </div>
        <div className="panel__body">
          <div className="panel__tab js-panel-tab" style={{ display: "block" }}>
            {/* data*/}
            <div className="data data_grid">
              <div className="data__container">
                <div className="data__body">
                  {incoming_events.length === 0 && (
                    <div class="empty__container">
                      <div class="empty__preview">
                        <img
                          class="CreateNewEvent"
                          src="images/NoBooking.png"
                          alt="Empty"
                        />
                      </div>
                      <div class="empty__title title title_lg">
                        <p> No incoming events，Find one now</p>
                      </div>

                      <div className="delete_footer">
                        <Link to="/home">
                          <button type="button" className="btn btn-primary">
                            Find
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                  {incoming_list}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* History */}

      <div className="panel history">
        <div className="panel__head panel__head_line">
          {/* btn group*/}
          <div className="panel__group btn-group btn-group_tabs">
            <button className="btn btn_light btn_icon active">
              <i className="la la-list " />
              Events History
            </button>
          </div>
        </div>
        <div className="panel__body">
          <div className="panel__tab" style={{ display: "block" }}>
            {/* data*/}
            <div className="data data_list">
              <div className="data__container">
                <div className="data__body">{completed_list}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingList;
