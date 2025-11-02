import { useState } from 'react';
import Axios from 'axios';

import './App.css';

function App() {

  const [name, setName] = useState('john');
  const [data, setData] = useState(0);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
      //use setState to access response data
      setData(res.data);
    });
  }


  return (
    <div className="App">
      <input placeholder='Enter a name' onChange={(event) => { setName(event.target.value) }} />
      <button onClick={fetchData}>Predict Age Api Call</button>

      <h1> Predicted Age: {data?.age}</h1>
    </div>
  );
}

export default App;
