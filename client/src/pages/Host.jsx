import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Siderbar/Sidebar";
import CheckRsvp from "../components/CheckRsvp/CheckRsvp";
import EventList from "../components/EventList/EventList";
import axios from "axios";

import "./Host.css";

function Host({ user, setUser }) {
  const [incoming_events, setIncomingEvents] = useState();
  const [completed_events, setCompletedEvents] = useState();
  const [applications, setApplications] = useState();
  const [actions, setActions] = useState(false);
  const [attenders, setAttenders] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      axios.get("/api/events/host/future"),
      axios.get("api/events/host/completed"),
      axios.get("api/applications/host"),
      axios.get("/api/applications"),
    ])
      .then((all) => {
        setIncomingEvents(all[0].data);
        setCompletedEvents(all[1].data);
        setApplications(all[2].data);
        setAttenders(all[3].data.applications);
        setActions(false);
      })
      .catch((err) => console.log(err));
  }, [actions]);

  // console.log(
  //   // "user",
  //   // user,
  //   // "incoming",
  //   // incoming_events,
  //   // "completed",
  //   // completed_events,
  //   // "applications",
  //   // applications.length
  // );

  const handleCreatesNew = () => {
    navigate("/newevent");
  };
  const handleSearch = () => {
    navigate("/home");
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid item xs={0} sm={1} md={1} lg={1}>
        <Sidebar user={user} setUser={setUser} applications={applications} />
      </Grid>

      <Grid item xs={0} sm={11} md={11} lg={3}>
        {applications && user && (
          <CheckRsvp
            user={user}
            applications={applications}
            setActions={setActions}
          />
        )}
      </Grid>

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={8}
        className="event_map "
        style={{ backgroundColor: "#F6F6FA" }}
      >
        <div className="container js-container">
          <div className="container__head">
            <div className="container__title title title_xl" style={{ color: "#6980f3" }}>Your Hostings</div>

            {/* search*/}
            <div className="container__search search">
              <button className="search__action action">
                <i className="la la-search "
                  onClick={handleSearch} />
              </button>
            </div>
            {/* new*/}
            <div className="container__new new ">
              <button className="new__action action" onClick={handleCreatesNew}>
                <i className="la la-plus-circle " />
              </button>
            </div>
          </div>
          <div className="container__body">
            {incoming_events && completed_events && attenders && (
              <EventList
                attenders={attenders}
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
