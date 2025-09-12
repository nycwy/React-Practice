import { useState } from "react";

export default function ColorPicker() {
    const [color, setColor] = useState("#ffffff");

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <div className="color-picker-container">
            <h2>Color Picker</h2>
            <div className="color-display" style={{ backgroundColor: color }}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="color">Select a Color: </label>
            <input type="color" value={color} id="color" onChange={handleColorChange} />
        </div>
    )
}