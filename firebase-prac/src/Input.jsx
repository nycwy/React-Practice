import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "./firebase";

const Input = ({ postId, onUpdateSuccess }) => {
    const [updatedMessage, setUpdatedMessage] = useState("");

    const handleUpdate = async (id) => {
        try {
            const postRef = doc(db, "posts", id);
            await updateDoc(postRef, {
                message: updatedMessage,
            });
            if (onUpdateSuccess) {
                onUpdateSuccess(id, updatedMessage);
            }
            setUpdatedMessage('');
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <div>
            <input
                type="text"
                name=""
                id=""
                placeholder="Update Value"
                value={updatedMessage}
                onChange={(e) => setUpdatedMessage(e.target.value)}
            />
            <button onClick={() => handleUpdate(postId)}>Update</button>
        </div>
    );
}

export default Input;