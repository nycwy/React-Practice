import { addDoc, collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";

function App() {
    const [message, setMessage] = useState('');
    const [posts, setPosts] = useState([]);

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

    useEffect(() => {
        const getPosts = async () => {
            try {
                const postsRef = collection(db, "posts");
                const postsDoc = await getDocs(postsRef);
                if (!postsDoc.empty) {
                    const posts = postsDoc.docs.map((doc) => ({
                        id: doc.id,
                        ...doc.data()
                    }));
                    setPosts(posts);
                }
            } catch (error) {
                console.log(error);
            }
        };

        getPosts();
    }, []);

    return (
        <>
            <input value={message} type="text" name="post" id="post" placeholder="Post" onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" onClick={handleAddPost}>Add Post</button>
            <h1>All Posts</h1>
            <div>
                {
                    posts.map((post) => {
                        return <div key={post.id}>{post.message}</div>
                    })
                }
            </div>
        </>
    )
}

export default App;
