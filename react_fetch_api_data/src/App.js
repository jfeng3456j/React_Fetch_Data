import { useEffect, useState } from 'react';
import Axios from 'axios';

import './App.css';



function App() {

  const [apiData, setApiData] = useState();

  useEffect(() => {
    fetchOnClick();

  }, []);

  const fetchOnClick = () => {
    //use axios for data fetching
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setApiData(res.data.fact);
    })
      .catch(
        (error) => {
          setApiData("Error retrieving data", error);
        }
      )
  }

  return (
    <div className="App">
      <button onClick={fetchOnClick} >Generate Api Data</button>
      <p> {apiData}</p>
    </div>
  );
}

export default App;
