import React from 'react'
import Header from '../components/Header/Header'
import Map from "../components/Map/Map";
import EventButton from '../components/EventButton/EventButton';
import SearchBar from "../components/Search/searchBar";

import { Grid } from "@material-ui/core";
function Home() {



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