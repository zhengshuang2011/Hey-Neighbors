import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useMapStyles from "./MapStyles";

export default function Map({ events }) {
  const classes = useMapStyles();
  const ottawaCoordinates = { lat: 45.41117, lng: -75.69812 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_itBW9kNLgs2Ef1vImn7JhCVcLsJ6smQ" }}
        defaultCenter={ottawaCoordinates}
        center={ottawaCoordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      >
        {events?.map((event) => {
          console.log(event);
          return (
            <div
              className={classes.markerContainer}
              lat={Number(event.locationLatitude)}
              lng={Number(event.locationLongitude)}
            >
              <Paper elevation={3} className={classes.paper}>
                <Typography
                  className={classes.typography}
                  variant="subtitle2"
                  gutterBottom
                >
                  {event.event_name}
                </Typography>
                <img
                  className={classes.pointer}
                  src={event.photo_image}
                  alt={event.event_name}
                />
              </Paper>
            </div>
          );
        })}

        <div className={classes.markerContainer} lat={45.41117} lng={-75.69812}>
          <Paper elevation={3} className={classes.paper}>
            <Typography
              className={classes.typography}
              variant="subtitle2"
              gutterBottom
            >
              Concert
            </Typography>
            <img
              className={classes.pointer}
              src={
                "https://1409791524.rsc.cdn77.org/data/images/full/514212/kpopconcert-jpg.jpg"
              }
              alt={"Concert"}
            />
          </Paper>
        </div>
      </GoogleMapReact>
    </div>
  );
}
