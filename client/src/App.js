import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Myevent from "./pages/Myevent";
import CreateEvent from "./pages/CreateEvent";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import Host from "./pages/Host";
import NewEvent from "./pages/NewEvent";
import RSVP from "./pages/RSVP";


function App() {
  const [user, setUser] = useState();
  const [center, setCenter] = useState(null);
  //console.log("user", user);

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

  useEffect(() => {
  
    navigator.geolocation.getCurrentPosition((position) => {
  
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  
  }, []);

  return (
    <div>
      <BrowserRouter>
       
        <Routes> 

          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/home"
            element={<Home user={user} center={center} setUser={setUser} />}
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

          <Route exact path="/myevent" element={<Myevent />} />
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
            element={<NewEvent user={user} setUser={setUser} />}
          />
           <Route exact path="/event/:id/rsvp" element={<RSVP user={user} center={center} setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
