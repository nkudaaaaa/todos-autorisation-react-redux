import { createSlice, configureStore } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersInfo',
    initialState: [
        {id: 1, login: 'john123', password: '1q2w3e'}
    ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            const userId = action.payload
            return state.filter(user => user.id !== userId);
        }
    }

});

export const {addUser, deleteUser } = usersSlice.actions;

const usersStore = configureStore({
    reducer: usersSlice.reducer,
})
export default usersStore;