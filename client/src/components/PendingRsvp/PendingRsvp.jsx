import React from 'react'
// import Button from '@mui/material/Button';
// import CancelIcon from '@mui/icons-material/Cancel';
// import Stack from '@mui/material/Stack';
import Box from "@mui/material/Box";
import "./PendingRsvp.css"

const commonStyles = {

  m: 1,
  borderColor: '#C4C4C4',
  width: 'auto',
  height: '0.5rem',
};

function PendingRsvp() {
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
              <div className="widget__title title">Your Pending RSVP</div>
              <div className="widget__badge badge green">1</div>
            </div>
            <div className="widget__body">
              {/* Loop the item*/}
              <div className="items">
                <div className="items__item" href="">
                  <div className="items__preview">
                    <img className="items__pic" src="img/user-3.jpg" alt="User" />
                    <div className="items__online online" />
                  </div>
                  <div className="items__wrap">
                    <div className="items__details">
                      <div className="items__name">Frist  Last Name</div>
                      <div className="items__time">2 people</div>
                    </div>
                    <div className="items__details">
                      <div className="items__name">Applied to </div>
                      <div className="items__time">Event's Name</div>
                    </div>
                    <Box sx={{ ...commonStyles, borderTop: 1 }} />
                    <div className="items__content discription">
                      RSVP discription................................
                    </div>

                    {/* <Stack direction="row" spacing={2}>
                      <Button variant="outlined" startIcon={<CancelIcon />}>

                        Cancel RSVP
                      </Button>
                    </Stack> */}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PendingRsvp