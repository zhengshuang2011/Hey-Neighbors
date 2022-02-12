import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Map from "./components/Map/Map";
import Home from "./pages/home";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("/api/users")
  //     .then((data) => console.log(data.data.users))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
