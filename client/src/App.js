import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import LandingPage from "./pages/LandingPage";
import Myevent from "./pages/Myevent";
import CreateEvent from "./pages/CreateEvent";
import Bookings from "./pages/Bookings";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    axios
      .get("/api/users")
      .then((data) => console.log(data.data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />

          <Route exact path="/home" element={<Home />} />

          <Route exact path="/signIn" element={<SignIn />} />

          <Route exact path="/register" element={<Register />} />

          <Route exact path="/Myevent" element={<Myevent />} />

          <Route exact path="/Bookings" element={<Bookings />} />

          <Route exact path="/CreateEvent" element={<CreateEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
