export default function List() {
    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Banana", calories: 105 },
        { id: 3, name: "Kiwi", calories: 44 },
        { id: 4, name: "Mango", calories: 99 },
        { id: 5, name: "Pineapple", calories: 37 }
    ];

    // fruits.sort((a, b)=> a.name.localeCompare(b.name)) //Alphabetical
    // fruits.sort((a, b) => b.name.localeCompare(a.name)) //Reverse Alphabetical
    // fruits.sort((a, b) => a.calories - b.calories); //Numeric
    // fruits.sort((a, b) => b.calories - a.calories); //Reverse Numeric

    // const lowCalFruits = fruits.filter(lowCalFruit => lowCalFruit.calories < 50);
    // const highCalFruits = fruits.filter(highCalFruit => highCalFruit.calories > 50);
    
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
    return (<ul>{listItems}</ul>);
}