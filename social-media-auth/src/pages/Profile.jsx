import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import PostCard from '../components/PostCard';

const Profile = () => {
    const { user } = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsRef = collection(db, "posts");
                const q = query(postsRef, where("userId", "==", user.id));
                const snapshot = await getDocs(q);
                const userPosts = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setPosts(userPosts);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchPosts();
    }, [user]);
    return (
        <div>
            <Navbar />
            <div>
                {posts.map((post) => (<PostCard title={post?.title} message={post?.message} key={post?.id} username={post?.username} />))}
            </div>
        </div>
    )
}

export default Profile;