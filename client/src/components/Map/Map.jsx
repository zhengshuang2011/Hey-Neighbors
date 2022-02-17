import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@material-ui/core";
import useMapStyles from "./MapStyles";
import axios from "axios";

export default function Map({ events, event }) {
  console.log("events in map.jsx = ", events);

  const classes = useMapStyles();
  const ottawaCoordinates = { lat: 45.41117, lng: -75.69812 };

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyA_itBW9kNLgs2Ef1vImn7JhCVcLsJ6smQ" }}
        defaultCenter={ottawaCoordinates}
        center={event ? { lat: event.locationlatitude - 0.012, lng: event.locationlongitude + 0.0020 }: null}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
      >
        {event ?
          <div
            className={classes.markerContainer}
            lat={event.locationlatitude}
            lng={event.locationlongitude}
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
          : null
        }
        {events?.map((event) => {
          console.log("event.map = ", event);
          return (
            <div
              className={classes.markerContainer}
              lat={event.locationlatitude}
              lng={event.locationlongitude}
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
        {/* <div className={classes.markerContainer} lat={45.41117} lng={-75.69812}>
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
        <div className={classes.markerContainer} lat={45.29981303104935} lng={-75.89353069112829}>
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
            </div>*/}
      </GoogleMapReact>
    </div>
  );
}
