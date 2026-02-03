import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Input from '../components/Input';
import Textarea from '../components/Textarea';
import Button from '../components/Button';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const handleCreatePost = () => {
        
    }

    return (
        <div>
            <Navbar />
            <div className='p-8 text-center space-y-2'>
                <h1>Add Post</h1>
                <label htmlFor="title">Title</label>
                <Input
                    type="text"
                    placeholder="Title"
                    value={title}
                    id='title'
                    setValue={setTitle}
                />
                <label htmlFor="message">Post Message</label>
                <div>
                    <Textarea
                        type="text"
                        placeholder="Message"
                        value={message}
                        id='message'
                        setValue={setMessage}
                    />
                </div>
                <Button text='Create Post' onClick={handleCreatePost} />
            </div>
        </div>
    )
}

export default AddPost;