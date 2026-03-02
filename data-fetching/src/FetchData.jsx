import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const api = await fetch("https://jsonplaceholder.typicode.com/photos");
                const data = await api.json();
                setApiData(data.slice(0,20));
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchData();
    }, [])
    return (
        <div>
            <h2>Fetched Data</h2>
            {apiData.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                </div>
            ))}
        </div>
    )
}

export default FetchData