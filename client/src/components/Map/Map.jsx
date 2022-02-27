import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography } from "@material-ui/core";
import useMapStyles from "./MapStyles";

export default function Map({
  events,
  event,
  handleClick,
  center,
  pinnedInitialCenter,
}) {
  //console.log("event ", event);

  const [mapObject, setMapObject] = useState(null);

  const classes = useMapStyles();
  const ottawaCoordinates = { lat: 45.41117, lng: -75.69812 };

  const handleApiLoad = ({ map, maps }) => {
    //console.log('Api loaded', map, maps)
    setMapObject({ map, maps });
  };

  useEffect(() => {
    //console.log('useffect in map', mapObject);
    if (mapObject) {
      if (pinnedInitialCenter) {
        const marker = new mapObject.maps.Marker({
          position: {
            lat: Number(center.lat),
            lng: Number(center.lng),
          },
          map: mapObject.map,
        });
      }
      if (event && !events) {
        const marker = new mapObject.maps.Marker({
          position: {
            lat: Number(event.locationlatitude),
            lng: Number(event.locationlongitude),
          },
          map: mapObject.map,
        });
      }
    }
  });

  console.log(center);

  return (
    <div className={classes.mapContainer}>
      {center && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyA_itBW9kNLgs2Ef1vImn7JhCVcLsJ6smQ" }}
          defaultCenter={center}
          center={
            event
              ? {
                  lat: event.locationlatitude - 0.001,
                  lng: event.locationlongitude + 0.002,
                }
              : null
          }
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          onGoogleApiLoaded={handleApiLoad}
        >
          {events?.map((event, index) => {
            //console.log("event.map = ", event);
            return (
              <div
                className={classes.markerContainer}
                lat={event.locationlatitude}
                lng={event.locationlongitude}
                onClick={() => handleClick(index)}
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
      )}
    </div>
  );
}
