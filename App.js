import React, { useState } from "react";
function App() {
  const [city,setCity] = useState("")
  const [result, setResult] = useState("")
  const changeHandler = e => {
    setCity(e.target.value);
  }
  const submitHandler = e => {
    e.preventDefault();
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`) .then(
      response => response.json()

    ).then(data => {
      const kelvin = data.main.temp;
      const celsius = kelvin - 273.15
      setResult("Temperature at"+" "+city+"\n"+Math.round(celsius)+"C")
      setCity("");
    })
  }
  return(
    <div>
      <div className="card-body">
        <h1>Weather App</h1>
        <form onSubmit={submitHandler}>
          <input type="text" name="city" onChange={changeHandler} /> <br /><br />
          <input type="submit" value="Get Temperature" />
        </form>
        <h1>{result}</h1>
      </div>
    </div>
  )
}
export default App;