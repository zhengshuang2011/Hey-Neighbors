import React, { useState } from "react";
import { Link } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PeopleIcon from "@mui/icons-material/People";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import Button from "@mui/material/Button";
import EventEdit from "./EventEdit/EventEdit";

import "./EventList.css";
import axios from "axios";

const Popup = (props) => {
  console.log(props);
  return (
    <div className="edit_popup-box">
      <div className="edit_box">
        <span className="close-icon" onClick={props.handleClose}>
          <CancelIcon color="action" />
        </span>
        {props.content}
      </div>
    </div>
  );
};

function EventList({
  incoming_events,
  completed_events,
  setActions,
  attenders,
}) {
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

  // Control Edit Event
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isCompleteOpen, setIsCompleteOpen] = useState(false);
  const [event, setEvent] = useState();

  const handleStatusChange = (id, event_status, attender_status) => {
    // e.preventDefault();
    // console.log(id, status_id);
    const data = JSON.stringify({
      event_status,
      attender_status,
    });
    const headers = {
      "Content-Type": "application/json",
    };
    Promise.all([
      axios.put(`api/events/change/${id}`, data, { headers: headers }),
      axios.put(`api/applications/event/${id}`, data, { headers: headers }),
    ])
      .then((data) => {
        console.log(data);
        if (isDeleteOpen) {
          setIsDeleteOpen();
        }
        if (isCompleteOpen) {
          setIsCompleteOpen();
        }
        setActions(true);
      })
      .catch((err) => console.log(err));
  };

  const togglePopup = (event) => {
    setIsOpen(!isOpen);
    setEvent(event);
  };

  const handleDeleteShow = (event) => {
    setIsDeleteOpen(!isDeleteOpen);
    setEvent(event);
  };

  const handleCompleteShow = (event) => {
    setIsCompleteOpen(!isCompleteOpen);
    setEvent(event);
  };

  const FindAttendersByEventId = (array, id) => {
    const output = [];
    for (let a of array) {
      if (
        (a.event_id === id && a.status_id === 2) ||
        (a.event_id === id && a.status_id === 6)
      ) {
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
      <div
        className="data__item host_incoming"
        key={event.id}
        data-id={event.id}
      >
        <div className="data__corner">
          {/* action*/}

          <Stack direction="row" spacing={1}>
            <IconButton aria-label="edit" onClick={() => togglePopup(event)}>
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="completed"
              onClick={() => handleCompleteShow(event)}
            >
              <EventAvailableIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              data-toggle="modal"
              data-target="#exampleModal"
              // onClick={() => {
              //   handleDelete(event.id, 3);
              // }}
              onClick={() => handleDeleteShow(event)}
            >
              <DeleteIcon />
            </IconButton>
          </Stack>
        </div>

        <div className="event_img">
          <img className="content__pic" src={event.photo_image} alt="Event" />
        </div>
        <div className="data__row">
          {/* <div className="data__cell"> */}
          {/* <div className="data__main"> */}

          <div className="data__wrap">
            <div className="data__content">
              <strong>{event.event_name}</strong>
            </div>
            <div className="data__label">
              <strong>{event.c_name}</strong>
            </div>
          </div>
          {/* </div> */}
          {/* </div> */}
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

  const completed_list = completed_events.map((event) => {
    const avartList = FindAttendersByEventId(attenders, event.id).map(
      (attender) => (
        <div className="members__item">
          <img className="members__pic" src={attender.avatar} alt="User" />
        </div>
      )
    );
    const number = FindAttendersByEventId(attenders, event.id).length;
    return (
      <div className="data__item" key={event.id}>
        <div className="data__row">
          <div className="data__cell data__cell_lg">
            <div className="data__main">
              <div className="event_img_list .host_history_i">
                <img
                  className="content__pic"
                  src={event.photo_image}
                  alt="Event"
                />
              </div>
              <div className="data__wrap host_history_t">
                <div className="data__content">
                  <strong>{event.event_name}</strong>
                </div>
                <div className="data__label ">
                  <strong>{event.c_name}</strong>{" "}
                </div>
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
            <div className="data__label ">
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
          <div className="data__cell data__cell_members mobile-hide">
            {/* members*/}
            <div className="members">
              {avartList}
              <div className="members__item">
                <div className="members__counter">{number}</div>
              </div>
            </div>
          </div>

          <div
            className="data__cell data__cell_action mobile-hide"
            onClick={() => {
              handleStatusChange(event.id, 3, 6);
            }}
          >
            <Button variant="outlined" startIcon={<DeleteForeverIcon />}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    );
  });

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
                          src="images/CreateNewEvent.png"
                          alt="Empty"
                        />
                      </div>
                      <div class="empty__title title title_lg">
                        <p> No incoming events，Create one now</p>
                      </div>

                      <div className="delete_footer">
                        <Link to="/newevent">
                          <button type="button" className="btn btn-primary">
                            Create
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
      {isOpen && (
        <Popup
          content={
            <EventEdit
              event={event}
              setActions={setActions}
              setIsOpen={setIsOpen}
            />
          }
          handleClose={togglePopup}
        />
      )}

      {isDeleteOpen && (
        <div className="edit_popup-box">
          <div className="edit_box delete">
            <div className="empty__container">
              <div className="empty__preview icon">
                <img
                  className="empty__pic"
                  src="images/delete.png"
                  alt="Empty"
                />
              </div>
              <div className="empty__title title title_lg">
                <p> Do you want to delete this Event:</p>
              </div>
              <div className="empty__text">
                This event: <b>{`${event.event_name}`}</b> <br />
                will be cancelled once you click the DELETE button
              </div>

              <div className="delete_footer">
                <button
                  type="button"
                  className="btn btn-secondary close"
                  data-dismiss="modal"
                  onClick={handleDeleteShow}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => {
                    handleStatusChange(event.id, 3, 5);
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCompleteOpen && (
        <div className="edit_popup-box">
          <div className="edit_box delete">
            <div class="empty__container">
              <div class="empty__preview">
                <img class="empty__pic" src="images/complete.png" alt="Empty" />
              </div>
              <div class="empty__title title title_lg">
                <p> Mark this event as complete:</p>
              </div>
              <div class="empty__text">
                This event: <b>{`${event.event_name}`}</b> <br />
                will move to the history once you click the COMPLETE button
              </div>

              <div className="delete_footer">
                <button
                  type="button"
                  className="btn btn-secondary close"
                  data-dismiss="modal"
                  onClick={handleCompleteShow}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    handleStatusChange(event.id, 2, 6);
                  }}
                >
                  COMPLETE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EventList;
