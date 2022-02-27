import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Siderbar/Sidebar";
import Preview from "../components/Preview/Preview";
import NewEventForm from "../components/NewEventForm/NewEventForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewEvent({ user, setUser, center }) {
  const navigate = useNavigate();
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
  const handleCreatesNew = () => {
    navigate("/newevent");
  };
  const handleSearch = () => {
    navigate("/home");
  };

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
          {incoming_events && user && (
            <Preview user={user} events={incoming_events} center={center} />
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
              <div
                className="container__title title title_xl"
                style={{ color: "#6980f3" }}
              >
                Create New Event
              </div>

              {/* search*/}
              <div className="container__search search">
                <button className="search__action action">
                  <i className="la la-search " onClick={handleSearch} />
                </button>
              </div>
              {/* new*/}
              {user && (
                <div className="container__new new ">
                  {/* <Link to="/newevent"> */}
                  <button
                    className="new__action action"
                    onClick={handleCreatesNew}
                  >
                    <i className="la la-plus-circle " />
                  </button>
                  {/* </Link> */}
                </div>
              )}
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
