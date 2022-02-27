import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import CreateEvent from "./pages/CreateEvent";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import Host from "./pages/Host";
import NewEvent from "./pages/NewEvent";
import RSVP from "./pages/RSVP";

function App() {
  const [user, setUser] = useState();
  // console.log("user", user);
  const [center, setCenter] = useState(null);

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     setCenter({
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     });
  //   });
  // }, []);

  useEffect(() => {
    axios
      .get("/api/users/login")
      .then((data) => {
        if (data.data) {
          setUser(data.data[0]);
        } else {
          setUser();
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/home"
            element={
              <Home
                user={user}
                setUser={setUser}
                center={center}
                setCenter={setCenter}
              />
            }
          />
          <Route
            exact
            path="/signIn"
            element={<SignIn user={user} setUser={setUser} />}
          />
          <Route
            exact
            path="/signUp"
            element={<SignUp user={user} setUser={setUser} />}
          />

        
          <Route
            exact
            path="/host"
            element={<Host user={user} setUser={setUser} />}
          />

          <Route
            exact
            path="/bookings"
            element={<Bookings user={user} setUser={setUser} />}
          />

          <Route exact path="/createEvent" element={<CreateEvent />} />

          <Route
            exact
            path="/newevent"
            element={<NewEvent user={user} setUser={setUser} center={center} />}
          />
          <Route
            exact
            path="/event/:id/rsvp"
            element={<RSVP user={user} setUser={setUser} center={center} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
