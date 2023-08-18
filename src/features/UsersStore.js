import { createSlice, configureStore } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'usersInfo',
    initialState: [
        {id: 1, login: 'john123', password: '1q2w3e', islogging: true},
        {id: 1, login: 'qqq', password: '111', islogging: true},
    ],
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        deleteUser: (state, action) => {
            const userId = action.payload
            return state.filter(user => user.id !== userId);
        },
        toggleLogging: (state, action) => {
            const userId = action.payload;
            const user = state.find(user => user.id === userId);

            if (user) {
                user.islogging = !user.islogging;
            }
        }
    }

});

export const {addUser, deleteUser, toggleLogging } = usersSlice.actions;

const usersStore = configureStore({
    reducer: usersSlice.reducer,
})
export default usersStore;