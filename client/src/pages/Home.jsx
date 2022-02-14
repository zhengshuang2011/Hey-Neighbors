import React from 'react'
import Header from '../components/Header/Header'
import Map from "../components/Map/Map";
import EventButton from '../components/EventButton/EventButton';
import SearchBar from "../components/Search/searchBar";

import { Grid } from "@material-ui/core";
import SmallCard from '../components/SmallCard/SmallCard';
import './home.css'


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