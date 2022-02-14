import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import LocationOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useMapStyles from "./MapStyles";

export default function Map() {

    const classes = useMapStyles();
    const ottawaCoordinates = { lat: 45.4111700, lng: -75.6981200 };

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA_itBW9kNLgs2Ef1vImn7JhCVcLsJ6smQ" }}
                defaultCenter={ottawaCoordinates}
                center={ottawaCoordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
            >

            </GoogleMapReact>
        </div>
    )
};