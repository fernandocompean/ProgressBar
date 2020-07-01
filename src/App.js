import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar.component";

function App() {
  const [increment, setIncrement] = useState(0);
  let progress = 0;

  const updateProgressBar = () =>{
    progress += increment + 10;
    if(progress <= 100){
      setIncrement(progress);
      setTimeout(updateProgressBar, 1000);
    }
  }

  useEffect(updateProgressBar, []);

  return (
    <div className="App">
      <ProgressBar increment={increment} />
    </div>
  );


}

export default App;