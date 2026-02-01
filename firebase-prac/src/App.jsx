import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Input from "./Input";

function App() {
    const [message, setMessage] = useState('');
    const [posts, setPosts] = useState([]);
    const handleAddPost = async () => {
        if (!message) return;

        try {
            const postRef = collection(db, "posts");
            const docRef = await addDoc(postRef, { message });
            setPosts((prev) => [...prev, { id: docRef.id, message }]);
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

    const handleDelete = async (id) => {
        try {
            const docRef = doc(db, "posts", id);
            await deleteDoc(docRef);
            const newPost = posts.filter(post => post.id !== id);
            setPosts(newPost);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    const handleLocalUpdate = (id, newMessage) => {
        setPosts(prevPosts => prevPosts.map(post => {
            return post.id === id ? { ...post, message: newMessage } : post
        }));
    }

    return (
        <>
            <input value={message} type="text" name="post" id="post" placeholder="Post" onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" onClick={handleAddPost}>Add Post</button>
            <h1>All Posts</h1>
            <div>
                {posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <p>{post.message}</p>
                            <button onClick={() => handleDelete(post.id)}>Delete</button>
                            <Input postId={post.id} onUpdateSuccess={handleLocalUpdate} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App;
