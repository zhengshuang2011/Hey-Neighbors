import React from 'react'
import { Grid } from "@material-ui/core";
import Sidebar from '../components/Siderbar/Sidebar';
import Perview from '../components/Perview/Perview';
import NewEventForm from '../components/NewEventForm/NewEventForm';

function NewEvent() {
  return (
    <>
      <Grid container direction='row' justifyContent="space-between"
        alignItems="stretch">
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={3}>
          <Perview />
        </Grid>
        <Grid item xs={8} style={{ backgroundColor: "#F6F6FA" }}>
          <div className="container js-container">
            <div className="container__head">

              <div className="container__title title title_xl">Create New Event</div>

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
              <NewEventForm />

            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default NewEvent