import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Siderbar/Sidebar";
import CheckRsvp from "../components/CheckRsvp/CheckRsvp";
import EventList from "../components/EventList/EventList";
import axios from "axios";

import './Host.css'

function Host({ user, setUser }) {
  const [incoming_events, setIncomingEvents] = useState();
  const [completed_events, setCompletedEvents] = useState();
  const [applications, setApplications] = useState();
  const [actions, setActions] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get("/api/events/host/future"),
      axios.get("api/events/host/completed"),
      axios.get("api/applications/host"),
    ])
      .then((all) => {
        setIncomingEvents(all[0].data);
        setCompletedEvents(all[1].data);
        setApplications(all[2].data);
        setActions(false);
      })
      .catch((err) => console.log(err));
  }, [actions]);

  console.log(
    "user",
    user,
    "incoming",
    incoming_events,
    "completed",
    completed_events,
    "applications",
    applications
  );

  return (
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
        {applications && (
          <CheckRsvp
            user={user}
            applications={applications}
            setActions={setActions}
          />
        )}

      </Grid>

      <Grid item xs={12} sm={11} md={11} lg={8} style={{ backgroundColor: "#F6F6FA" }}>

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
            {incoming_events && completed_events && (
              <EventList
                incoming_events={incoming_events}
                completed_events={completed_events}
                setActions={setActions}
              />
            )}
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default Host;
