import { useEffect } from "react";
import axios from "axios";
import Map from "./components/Map/Map";

function App() {
  useEffect(() => {
    axios
      .get("/api/users")
      .then((data) => console.log(data.data.users))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>hello world</h1>
      <Map />
    </div>
  );
}

export default App;
