import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Map from "../components/Map/Map";
import EventButton from '../components/EventButton/EventButton';
import SearchBar from "../components/Search/searchBar";
import axios from "axios";

import { Grid } from "@material-ui/core";
function Home() {

  const [event, setEvent] = useState("")

  useEffect(() => {
      axios
        .get("/api/events")
        .then((data) => {
        console.log(data.data.events);
        setEvent([...data.data.events]);
        })
        .catch((err) => console.log(err));
    }, []);

  return (
    <Grid container direction='row' justifyContent="space-between"
      alignItems="stretch">
      <Grid item xs={0} sm={2} >
        <Header />
      </Grid>
      

      <Grid item xs={12} sm={6} >
        <Grid container direction="column"
          justifyContent="space-evenly"
          alignItems="stretch">
          <SearchBar />
        </Grid>
      </Grid>
      <img src={event[1].photo_image} alt="Girl in a jacket" width="800" height="600"/>
      <Grid item xs={12} sm={4}>
        <Grid container direction="column"
          justifyContent="space-evenly"
          alignItems="stretch">
          <EventButton />
          <Map />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home