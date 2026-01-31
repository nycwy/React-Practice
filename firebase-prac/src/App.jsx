import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "./firebase";

function App() {
    const [message, setMessage] = useState('');

    const handleAddPost = async () => {
        if (!message) return;

        try {
            const postRef = collection(db, "posts");
            await addDoc(postRef, { message });

            setMessage('');
            console.log("Post added Successfully!");
        } catch (error) {
            console.log("Error adding document: ", error);
        }
    }

    return (
        <>
            <input value={message} type="text" name="post" id="post" placeholder="Post" onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" onClick={handleAddPost}>Add Post</button>
        </>
    )
}

export default App;
