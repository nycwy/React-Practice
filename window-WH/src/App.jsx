import { useState, useEffect } from "react"

export default function App() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("Removed");
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height]);


    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return (
        <>
            <p>Width: {width}px</p>
            <p>Height: {height}px</p>
        </>
    )
}