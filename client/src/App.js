import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Map from "./components/Map/Map";
import Navbar from "./components/NavBar/Navbar";
import SignIn from "./SignIn";
import Register from "./Register";
import LandingPage from "./LandingPage";

function App() {

  useEffect(() => {
    axios
      .get("/api/users")
      .then((data) => console.log(data.data.users))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/api/events")
      .then((data) => console.log(data.data.events))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/api/applications")
      .then((data) => console.log(data.data.applications))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("/api/categories")
      .then((data) => console.log(data.data.categories))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BrowserRouter>
      
        <Navbar />

        <Routes>

          <Route exact path = "/" element={<LandingPage />}/>
          
          <Route exact path = "/signIn" element={<SignIn />}/>

          <Route exact path = "/register" element={<Register />}/>
    
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
