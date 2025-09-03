import List from "./List"

export default function App() {

  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 105 },
    { id: 3, name: "Kiwi", calories: 44 },
    { id: 4, name: "Mango", calories: 99 },
    { id: 5, name: "Pineapple", calories: 37 }
  ];

  const vegetables = [
    { id: 6, name: "Potatoes", calories: 110 },
    { id: 7, name: "Celery", calories: 15 },
    { id: 8, name: "Carrots", calories: 25 },
    { id: 9, name: "Corn", calories: 63 },
    { id: 10, name: "Broccoli", calories: 50 }
  ];

  return (
    <>
      <List items={fruits} category="Fruits" />
      <List items={vegetables} category="Vegetables" />
    </>
  )
}