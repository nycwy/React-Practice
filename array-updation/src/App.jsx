import { useState } from "react"

export default function App() {
  const [fruits, setFruits] = useState(["apple", "banana", "mango"]);

  function handleAddFruits() {
    const newFruit = document.getElementById('newFruit').value;
    document.getElementById('newFruit').value = "";
    setFruits(f => [...f, newFruit]);
  }

  function handleDeleteFruits(index) {
    setFruits(fruits.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>List of fruits</h2>
      <ul>{fruits.map((f, index) => <li key={index} onClick={() => handleDeleteFruits(index)} style={{cursor: "pointer"}}>{f}</li>)}</ul>
      <input type="text" id="newFruit"/>
      <button onClick={handleAddFruits}>add fruit</button>
    </div>
  )
}