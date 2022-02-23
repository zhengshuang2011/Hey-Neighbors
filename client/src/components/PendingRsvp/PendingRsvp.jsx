import React from "react";
// import Button from '@mui/material/Button';
// import CancelIcon from '@mui/icons-material/Cancel';
// import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import "./PendingRsvp.css";

const commonStyles = {
  m: 1,
  borderColor: "#C4C4C4",
  width: "auto",
  height: "0.5rem",
};

function PendingRsvp({ user, applications }) {
  const number = applications.length;

  const application_list = applications.map((a) => (
    <div className="items loop" key={a.id}>
      <div className="items__item" href="">
        <div className="items__preview">
          <img className="items__pic" src={a.avatar} alt="User" />
          <div className="items__online online" />
        </div>
        <div className="items__wrap">
          <div className="items__details">
            <div className="items__name">
              {a.first_name} {a.last_name}
            </div>
            <div className="items__time">{a.people_number} peoples</div>
          </div>
          <div className="items__details">
            <div className="items__name">Applied to </div>
            <div className="items__time">{a.event_name}</div>
          </div>
          {a.vaccine && (
            <div className="items__details">
              <div className="items__name">Vaccined </div>
              <div className="items__time">Yes</div>
            </div>
          )}
          <Box sx={{ ...commonStyles, borderTop: 1 }} />
          <div className="items__content discription">{a.description}</div>
          {a.status_id === 1 && (
            <div className="items__details">
              <button type="button" class="btn btn-info">
                Pending
              </button>
            </div>
          )}
          {a.status_id === 2 && (
            <div className="items__details">
              <button type="button" class="btn btn-success">
                Approved
              </button>
            </div>
          )}
          {a.status_id === 3 && (
            <div className="items__details">
              <button type="button" class="btn btn-danger">
                Rejected
              </button>
            </div>
          )}
          {a.status_id === 5 && (
            <div className="items__details">
              <button type="button" class="btn btn-warning">
                Event Cancelled
              </button>
            </div>
          )}
          {a.status_id === 6 && (
            <div className="items__details">
              <button type="button" class="btn btn-secondary">
                Event Completed
              </button>
            </div>
          )}
          {/* <Stack direction="row" spacing={2}>
        <Button variant="outlined" startIcon={<CancelIcon />}>

          Cancel RSVP
        </Button>
      </Stack> */}
        </div>
      </div>
    </div>
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
              <div className="widget__title title">Your RSVP</div>
              <div className="widget__badge badge green">{number}</div>
            </div>
            <div className="widget__body">
              {/* Loop the item*/}
              {applications.length === 0 && (
                <div class="empty__container">
                  <div class="empty__preview">
                    <img
                      class="no_applications"
                      src="images/PendingRsvp.png"
                      alt="Empty"
                    />
                  </div>
                  <div class="empty__title title title_lg">
                    <sapan>No Booking right not</sapan>
                  </div>
                </div>
              )}
              {application_list}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PendingRsvp;
