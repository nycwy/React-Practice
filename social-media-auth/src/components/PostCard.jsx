const PostCard = ({ title, message, username }) => {

    return (
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center mb-3">
                <div className="text-sm font-medium text-blue-600">
                    @{username || "anonymous"}
                </div>
            </div>

            <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>

            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {message}
            </p>
        </div>
    );
};

export default PostCard;
