export default function List(props) {
    
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
    return (
        <>
            <h2>{props.category}</h2>
            <ul>{listItems}</ul>
        </>
    );
}