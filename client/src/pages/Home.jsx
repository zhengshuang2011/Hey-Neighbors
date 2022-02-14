import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Map from "../components/Map/Map";
import axios from "axios";
import SearchBar from "../components/Search/searchBar";

function Home() {
  // const [event, setEvent] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("/api/events")
  //     .then((data) => {
  //       console.log(data.data.events);
  //       setEvent([...data.data.events]);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // console.log(`current event is = ${JSON.stringify(event)}`);

  // useEffect(() => {
  //   axios
  //     .get("/api/applications")
  //     .then((data) => console.log(data.data.applications))
  //     .catch((err) => console.log(err));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("/api/categories")
  //     .then((data) => console.log(data.data.categories))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div className="comtainer">
      <Header />
      <div className="row">
        <div className="col">{/* <Header /> */}</div>
        <div className="col-5">
          <SearchBar />
        </div>
        <div className="col-5">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default Home;
