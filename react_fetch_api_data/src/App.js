import { useState } from "react";
import Axios from "axios";

import "./App.css";
import ApiButton from "./components/ApiButton";

function App() {
  const [apiData, setApiData] = useState("");

  const fetchData = (category) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${category}/`)
      .then((response) => {
        console.log(response.data);
        setApiData(response.data[0]);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setApiData("Error fetching data");
      });
  };

  return (
    <div className="App">
      <h1> Fetch Api to make execuses</h1>

      <ApiButton name="Party" category="party" onClick={fetchData} />
      <br></br>
      <ApiButton name="Family" category="family" onClick={fetchData} />
      <br></br>
      <ApiButton name="Office" category="office" onClick={fetchData} />

      {(
        <p style={{ marginTop: "20px", fontWeight: "bold" }}>
          Excuse: {apiData.excuse}
        </p>
      )}
    </div>
  );
}

export default App;
