import "./App.css";

function App() {
  //fetch() use promise to return json response
  fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });

  return (
    <div className="App">
      <button>Generate API Data</button>
      <p></p>
    </div>
  )
}

export default App;
