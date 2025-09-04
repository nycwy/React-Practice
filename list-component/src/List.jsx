function List(props) {
    
    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
    return (
        <>
            <h2 className="list-category">{props.category}</h2>
            <ul className="list-items">{listItems}</ul>
        </>
    );
}

List.defaultProps = {
    category: "Category",
    items: []
}

export default List;