import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Siderbar/Sidebar";
import SideEventDetail from "../components/SideEventDetail/SideEventDetail";
import NewRsvp from "../components/NewRsvp/NewRsvp";
// import axios from "axios";

function RSVP({ user, setUser }) {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item xs={0} sm={1} md={1} lg={1}>
          <Sidebar user={user} setUser={setUser} />
        </Grid>
        <Grid item xs={0} sm={11} md={11} lg={3}>
          <SideEventDetail />
        </Grid>
        <Grid item xs={12} sm={11} md={11} lg={8} style={{ backgroundColor: "#F6F6FA" }}>
          <div className="container js-container">
            <div className="container__head">
              <div className="container__title title title_xl">
                Send Your RSVP
              </div>

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
              <NewRsvp />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  )
}

export default RSVP