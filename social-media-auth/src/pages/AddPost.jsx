import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const { user } = useContext(AuthContext);

    const handleCreatePost = async () => {
        try {
            const postRef = collection(db, "posts");
            await addDoc(postRef, {
                title,
                message,
                userId: user?.id,
                created_at: serverTimestamp()
            })
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className='mx-auto mt-10 w-full max-w-lg rounded-lg bg-white p-8'>
                <div className='mb-6 text-center'>
                    <h1 className='text-2xl font-bold text-gray-800'>Add Post</h1>
                    <p className='text-sm text-gray-500'>Feel free to share your thoughts.</p>
                </div>
                <div className='space-y-2 text-left'>
                    <div>
                        {/* <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="title">Title</label> */}
                        <Input
                            type="text"
                            placeholder="Title"
                            value={title}
                            id='title'
                            setValue={setTitle}
                            className='w-full shadow-none border-gray-500'
                        />
                    </div>
                    <div>
                        {/* <label className="mb-2 block text-sm font-medium text-gray-700" htmlFor="message">Post Message</label> */}
                        <Textarea
                            type="text"
                            placeholder="Message"
                            value={message}
                            id='message'
                            setValue={setMessage}
                        />
                    </div>
                    <div className='pt-2'>
                        <Button className='w-full bg-black hover:bg-gray-900' text='Create Post' onClick={handleCreatePost} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost;