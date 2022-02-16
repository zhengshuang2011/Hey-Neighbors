import React from 'react'
import { Grid } from "@material-ui/core";
import Sidebar from '../components/Siderbar/Sidebar';
import CheckRsvp from '../components/CheckRsvp/CheckRsvp';
import EventList from '../components/EventList/EventList';

// import './Host.css'

function Host() {
  return (

    <Grid container direction='row' justifyContent="center"
      alignItems="stretch">
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={3}>
        <CheckRsvp />

      </Grid>
      <Grid item xs={8} style={{ backgroundColor: "#F6F6FA" }}>
        <div className="container js-container">
          <div className="container__head">

            <div className="container__title title title_xl">Your Hostings</div>

            {/* search*/}
            <div className="container__search search">
              <button className="search__action action">
                <i className="la la-search " />
              </button>
            </div>
            {/* new*/}
            <div className="container__new new ">
              <button className="new__action action">
                <i className="la la-plus-circle " />
              </button>
            </div>
          </div>
          <div className="container__body">
            <EventList />

          </div>
        </div>
      </Grid>
    </Grid>


  )
}

export default Host