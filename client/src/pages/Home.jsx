import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Map from "../components/Map/Map";
import EventButton from '../components/EventButton/EventButton';
import SearchBar from "../components/Search/searchBar";
import axios from "axios";

import { Grid } from "@material-ui/core";
import SmallCard from '../components/SmallCard/SmallCard';
import './home.css'

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

function Home() {

  return (
    <Grid container direction='row' justifyContent="space-between"
      alignItems="stretch">
      <Grid item >
        <Header active={true} />
      </Grid>
      

      <Grid item xs={12} sm={5} >
        <Grid container direction="column"
          justifyContent="space-evenly"
          alignItems="stretch">
          <SearchBar />
          <Grid class="scroll" container spacing={1} justifyContent="flex-start"
            alignItems="center" >

            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </Grid>

        </Grid>
      </Grid>

      <img src={event[1].photo_image} alt="Girl in a jacket" width="400" height="300"/>
      <Grid item xs={12} sm={4}>


      <Grid item xs={12} sm={5}>

        <Grid container direction="column"
          justifyContent="space-evenly"
          alignItems="stretch">
          <Grid item >
            <EventButton />
          </Grid>
          <Grid item>
            <Map />
          </Grid>

        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home