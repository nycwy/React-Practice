import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
    const { user } = useContext(UserContext);

    if (!user) return (
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-lg text-center animate-pulse">
            Please Login to continue
        </div>
    )

    return (
        <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-xl shadow-sm text-center">
            <h3 className="text-gray-600 text-sm uppercase tracking-wide font-semibold">Current Session</h3>
            <p className="text-xl text-green-800 mt-1">
                Hello, <span className="font-bold">{user.username}</span>!
            </p>
            <p className="text-green-600 text-sm mt-2">Welcome to your dashboard.</p>
        </div>
    )
}

export default Profile;