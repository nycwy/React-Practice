import React, { useEffect, useReducer } from 'react'

const initialState = {
    loading: false,
    advice: '',
    error: ''
};

const adviceReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_START':
            return { loading: true, advice: '', error: '' };
        case 'FETCH_SUCCESS':
            return { loading: false, advice: action.payload, error: '' };
        case 'FETCH_ERROR':
            return { loading: false, advice: '', error: action.payload };
        default:
            return state;
    }
}

const DataFetcher = () => {
    const [state, dispatch] = useReducer(adviceReducer, initialState);

    const fetchData = async () => {
        dispatch({ type: 'FETCH_START' });
        try {
            const apiData = await fetch('https://api.adviceslip.com/advice');
            if (!apiData.ok) throw new Error('Failed to fetch advice');

            const data = await apiData.json();
            dispatch({
                type: 'FETCH_SUCCESS',
                payload: data.slip.advice
            });
        } catch (error) {
            dispatch({
                type: 'FETCH_ERROR',
                payload: error.message
            });
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center p-8 max-w-lg mx-auto mt-10 bg-white rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Unsolicited Advice</h2>
            {state.loading && <p className="text-blue-500 animate-pulse">Consulting the oracle...</p>}
            {state.error && <p className="text-red-500 font-medium">Error: {state.error}</p>}
            {state.advice && !state.loading && (
                <blockquote className="text-2xl text-center text-gray-700 italic border-l-4 border-indigo-500 pl-4 py-2">
                    "{state.advice}"
                </blockquote>
            )}
            <button
                onClick={fetchData}
                disabled={state.loading}
                className='bg-indigo-500 text-white px-2 py-1 mt-4 rounded-md'>
                Get New Advice
            </button>
        </div>
    );
}

export default DataFetcher