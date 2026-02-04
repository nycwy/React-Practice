import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import PostCard from '../components/PostCard';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const postRef = collection(db, "posts");
            const postDocs = await getDocs(postRef);

            const posts = postDocs.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            console.log(posts);
            setPosts(posts);
        }
        fetchPosts();
    }, []);


    return (
        <div>
            <Navbar />
            <div>
                {posts.map((post) => (<PostCard title={post?.title} message={post?.message} key={post?.id} username={post?.username} />))}
            </div>
        </div>
    )
}

export default Home;