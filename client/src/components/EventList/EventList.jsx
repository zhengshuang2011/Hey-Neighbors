import React from 'react'
import eventImg from "../../assets/HappyEyes.png"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


import './EventList.css'

function EventList() {
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
                  <div className="data__item">
                    <div className="data__corner data__corner_left">
                      {/* progress*/}
                      <div className="progress">
                        <div
                          className="progress__value bg-green-raw"
                          style={{ width: "70%" }}
                        />
                      </div>
                    </div>
                    <div className="data__corner">
                      {/* action*/}

                      <Stack direction="row" spacing={1}>
                        <IconButton aria-label="delete">
                          <EditIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </Stack>

                    </div>
                    <div className="data__row">
                      <div className="data__cell">
                        <div className="data__main">
                          <div className="event_img">
                            <img class="content__pic" src={eventImg} alt="Event" />
                          </div>
                          <div className="data__wrap">
                            <div className="data__content">
                              <strong>Event's name</strong>
                            </div>
                            <div className="data__label"><strong>Category</strong></div>
                          </div>
                        </div>
                      </div>
                      <div className="data__cell">

                        <div className="data__label">


                          <div> <AccessTimeIcon />
                            <strong> March 10 at 4pm</strong> </div>
                          <div><PeopleIcon />
                            <strong> Up to 10</strong></div>
                          <div> <FmdGoodIcon />
                            <strong> Address: city name</strong></div>

                        </div>
                      </div>
                      <div className="data__cell">
                        {/* members*/}
                        <div className="members data__members">
                          <div className="members__item">
                            <img
                              className="members__pic"
                              src="img/user-1.jpg"
                              alt="User"
                            />
                          </div>
                          <div className="members__item">
                            <img
                              className="members__pic"
                              src="img/user-5.jpg"
                              alt="User"
                            />
                          </div>
                          <div className="members__item">
                            <img
                              className="members__pic"
                              src="img/user-4.jpg"
                              alt="User"
                            />
                          </div>
                          <div className="members__item">
                            <div className="members__counter">+5</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


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
          <div className="panel__tab ]" style={{ display: "block" }}>
            {/* data*/}
            <div className="data data_list">
              <div className="data__container">
                <div className="data__body">
                  <div className="data__item">
                    <div className="data__row">
                      <div className="data__cell data__cell_lg">
                        <div className="data__main">
                          <div className="event_img_list">
                            <img class="content__pic" src={eventImg} alt="Event" />
                          </div>
                          <div className="data__wrap">
                            <div className="data__content">
                              <strong>Event's name</strong>
                            </div>
                            <div className="data__label">Category</div>
                          </div>
                        </div>
                      </div>
                      <div className="data__cell mobile-text-right">
                        <div className="data__label">
                          <AccessTimeIcon />
                        </div>
                        <div className="data__label"><strong> March 10 at 4pm</strong></div>
                      </div>
                      <div className="data__cell mobile-hide">
                        <div className="data__label">
                          <PeopleIcon />
                        </div>
                        <div className="data__label"><strong> Up to 10</strong></div>
                      </div>
                      <div className="data__cell mobile-hide">
                        <div className="data__label"><FmdGoodIcon /></div>
                        <div className="data__label"><strong> Address: city name</strong></div>
                      </div>
                      <div className="data__cell data__cell_members mobile-hide">
                        {/* members*/}
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
                      </div>
                      <div className="data__cell data__cell_action mobile-hide">
                        <button className="action action_stroke">
                          <i className="la la-ellipsis-h " />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default EventList