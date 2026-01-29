import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchAdvice = createAsyncThunk('advice/fetchAdvice', async () => {
    const response = await fetch('/api/advice');
    const data = await response.json();
    console.log("API RESPONSE:", data);
    return data;
});

const initialState = {
    adviceText: "",
    isLoading: false,
    error: null,
}

const adviceSlice = createSlice({
    name: 'advice',
    initialState,
    
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchAdvice.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
        
            .addCase(fetchAdvice.fulfilled, (state, action) => {
                state.isLoading = false;
                state.adviceText = action.payload.advice;
            })
        
            .addCase(fetchAdvice.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    },
});

export default adviceSlice.reducer;