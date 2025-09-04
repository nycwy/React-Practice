function Button() {
    let count = 0;
    const handleClick = () => {
        if (count > 10) {
            console.log("Enough! Stop clicking!");
            return;
        }
        count = count + 1;
        console.log(`You clicked ${count} times`);
    }
    
    return (
        <button onClick={handleClick}>Click me!</button>
    )
}

export default Button;