function Advice({ advice, isLoading, onFetchNew }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-8 text-center">
                    <h5 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-4">
                        Today's Wisdom
                    </h5>
                    <p className="text-2xl font-serif text-gray-800 leading-relaxed mb-8">
                        {isLoading ? "Fetching wisdom..." : (advice || "Click the button to get started!")}
                    </p>

                    <div className="w-full border-t border-gray-100 mb-6"></div>

                    <button
                        onClick={onFetchNew}
                        disabled={isLoading}
                        className={`
                            inline-flex items-center justify-center px-6 py-3
                            text-base font-medium text-white rounded-full
                            transition-all duration-200 ease-in-out shadow-md
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                            ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 hover:-translate-y-1"}
                            `}
                    >
                        {isLoading ? (
                            <span className="flex items-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Loading...
                            </span>
                        ) : (
                            "New Advice"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Advice;