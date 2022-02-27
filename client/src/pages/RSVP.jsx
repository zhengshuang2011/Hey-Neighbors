import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Sidebar from "../components/Siderbar/Sidebar";
import SideEventDetail from "../components/SideEventDetail/SideEventDetail";
import NewRsvp from "../components/NewRsvp/NewRsvp";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function RSVP({ user, setUser, center }) {
  const [eventDetail, setEventDetail] = useState();
  // const [submit, setSubmit] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([axios.get(`/api/events/${id}`)])
      .then((all) => {
        console.log("RSVP event detail", all);
        setEventDetail(all[0].data);
        // setSubmit(false);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleCreatesNew = () => {
    navigate("/newevent");
  };
  const handleSearch = () => {
    navigate("/home");
  };

  console.log("user", user, "event_detail_rsvp", eventDetail);

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
          {eventDetail && (
            <SideEventDetail user={user} event={eventDetail} center={center} />
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
                Send Your RSVP
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
              <NewRsvp participate_id={user.id} event_id={id} />
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default RSVP;
