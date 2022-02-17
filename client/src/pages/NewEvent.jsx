import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Siderbar/Sidebar";
import Preview from "../components/Preview/Preview";
import NewEventForm from "../components/NewEventForm/NewEventForm";
import axios from "axios";

function NewEvent({ user, setUser }) {
  const [incoming_events, setIncomingEvents] = useState();
  console.log(incoming_events);
  const [upload, setUpload] = useState(false);
  console.log(upload);

  useEffect(() => {
    Promise.all([axios.get("/api/events/host/future")])
      .then((all) => {
        setIncomingEvents(all[0].data);
        setUpload(false);
      })
      .catch((err) => console.log(err));
  }, [upload]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="stretch"
      >
        <Grid item xs={1}>
          <Sidebar user={user} setUser={setUser} />
        </Grid>
        <Grid item xs={3}>
          {incoming_events && <Preview user={user} events={incoming_events} />}
        </Grid>
        <Grid item xs={8} style={{ backgroundColor: "#F6F6FA" }}>
          <div className="container js-container">
            <div className="container__head">
              <div className="container__title title title_xl">
                Create New Event
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
              <NewEventForm user={user} setUpload={setUpload} />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default NewEvent;
