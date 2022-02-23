import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingList from "../components/BookingList/BookingList";
import PendingRsvp from "../components/PendingRsvp/PendingRsvp";
import Sidebar from "../components/Siderbar/Sidebar";
import { Grid } from "@material-ui/core";
import axios from "axios";

function Bookings({ user, setUser }) {
  const [incoming_events, setIncomingEvents] = useState();
  const [completed_events, setCompletedEvents] = useState();
  const [applications, setApplications] = useState();
  const [attenders, setAttenders] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([
      axios.get("/api/events/user/future"),
      axios.get("api/events/user/completed"),
      axios.get("api/applications/attender"),
      axios.get("/api/applications"),
    ])
      .then((all) => {
        setIncomingEvents(all[0].data);
        setCompletedEvents(all[1].data);
        setApplications(all[2].data);
        setAttenders(all[3].data.applications);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleCreatesNew = () => {
    navigate("/newevent");
  };
  const handleSearch = () => {
    navigate("/home");
  };
  // console.log(
  //   "user",
  //   user,
  //   "incoming",
  //   incoming_events,
  //   "completed",
  //   completed_events,
  //   "applications",
  //   applications
  // );
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
          {applications && user && (
            <PendingRsvp user={user} applications={applications} />
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
          <div className="container">
            <div className="container__head">
              <div className="container__title title title_xl" style={{ color: "#6980f3" }}>
                Your Bookings{" "}
              </div>

              {/* search*/}
              <div className="container__search search">
                <button className="search__action action">
                  <i className="la la-search "
                    onClick={handleSearch} />
                </button>
              </div>
              {/* new*/}
              <div className="container__new new ">
                <button
                  className="new__action action"
                  onClick={handleCreatesNew}
                >
                  <i className="la la-plus-circle " />
                </button>
              </div>
            </div>
            <div className="container__body">
              {incoming_events && completed_events && attenders && (
                <BookingList
                  incoming_events={incoming_events}
                  completed_events={completed_events}
                  attenders={attenders}
                />
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Bookings;
