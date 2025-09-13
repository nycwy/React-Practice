import { useState } from "react";

function App() {
  const [car, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");


  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCar((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCar((c) => c.filter((_, i) => i !== index));
  }

  function handleCarYear(event) {
    setCarYear(event.target.value);
  }

  function handlCarMake(event) {
    setCarMake(event.target.value);
  }

  function handlCarModel(event) {
    setCarModel(event.target.value);
  }

  return (
    <div>
      <h2>List of Cars Object</h2>
      <ul>{car.map((c, index) => <li key={index} onClick={() => handleRemoveCar(index)} style={{cursor: "pointer"}}>{c.year} {c.make} {c.model}</li>)}</ul>
      <input type="number" value={carYear} onChange={handleCarYear}/> <br></br>
      <input type="text" value={carMake} onChange={handlCarMake}/> <br></br>
      <input type="text" value={carModel} onChange={handlCarModel} /> <br></br>
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default App;