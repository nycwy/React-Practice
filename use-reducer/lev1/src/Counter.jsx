import React from 'react'
import { useReducer } from 'react'

const initialState = {
    count: 0
};

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + (action.payload || 1) };
        
        case 'DECREMENT':
            return { count: state.count - (action.payload || 1) };
        
        case 'RESET':
            return { count: 0 };
        
        default:
            return state;
    }
}
const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    
    return (
        <>
            <div>
                Count: {state.count}
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+5</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'RESET' })}>Reset to zero</button>
            </div>
        </>
    )
}

export default Counter