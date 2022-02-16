import React from "react";
import BookingList from "../components/BookingList/BookingList";
import PendingRsvp from "../components/PendingRsvp/PendingRsvp";
import Sidebar from "../components/Siderbar/Sidebar";
import { Grid } from "@material-ui/core";

function Bookings() {
  return (
    <>
      <Grid container direction='row' justifyContent="center"
        alignItems="stretch">
        <Grid item xs={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={3}>
          <PendingRsvp />

        </Grid>
        <Grid item xs={8} style={{ backgroundColor: "#F6F6FA" }}>
          <div className="container">
            <div className="container__head">

              <div className="container__title title title_xl">Your Bookings </div>

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
              <BookingList />

            </div>
          </div>
        </Grid>
      </Grid>

    </>
  );
}

export default Bookings;
