import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
});

const initialState = {
    usersList: [],
    isLoading: false,
    error: null
};

const userSlice = createSlice({
    name: 'users',
    initialState,

    // Standard reducers [for synchronous operation (eg. logout)]
    reducers: {
        clearUsers: (state) => {
            state.usersList = [];
        }
    },

    // Extra reducers [for async operations]
    extraReducers: (builder) => {
        builder
            // Pending
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })

            // Success
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.usersList = action.payload;
            })

            // Error
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { clearUsers } = userSlice.actions;
export default userSlice.reducer;