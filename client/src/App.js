import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import Myevent from "./pages/Myevent";
import CreateEvent from "./pages/CreateEvent";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";

function App() {
  useEffect(() => {
    axios
      .get("/api/users")
      .then((data) => console.log(data.data.users))
      .catch((err) => console.log(err));
  }, []);
// useEffect(() => {
//     axios
//       .get("/api/events")
//       .then((data) => {
//       console.log(data.data.events);
//       setEvent([...data.data.events]);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   console.log(`current event is = ${JSON.stringify(event)}`);

//   useEffect(() => {
//     axios
//       .get("/api/applications")
//       .then((data) => console.log(data.data.applications))
//       .catch((err) => console.log(err));
//   }, []);

//   useEffect(() => {
//     axios
//       .get("/api/categories")
//       .then((data) => console.log(data.data.categories))
//       .catch((err) => console.log(err));
//   }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route exact path="/home" element={<Home />} />
          <Route exact path="/home2" element={<Home2 />} />

          <Route exact path="/signIn" element={<SignIn />} />
          <Route exact path="/signUp" element={<SignUp />} />

          <Route exact path="/myevent" element={<Myevent />} />

          <Route exact path="/bookings" element={<Bookings />} />

          <Route exact path="/createEvent" element={<CreateEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
