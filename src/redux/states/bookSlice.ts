
import { createSlice } from '@reduxjs/toolkit';
import { ServerDataBooks } from '../../models';


const initialState: ServerDataBooks[] = [];

export const bookSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {
    getBooks: (state, action) => {

      return state + action.payload;
    }
  }
});

export const { getBooks } = bookSlice.actions;

export default bookSlice.reducer;