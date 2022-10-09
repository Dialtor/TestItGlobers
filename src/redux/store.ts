
import { configureStore } from '@reduxjs/toolkit';
import { ServerDataBooks } from '../models';
import bookSlice from './states/bookSlice';
// import { favoritesSlice, peopleSlice } from './states';

export interface AppStore {
  books: ServerDataBooks[];
}

export default configureStore<AppStore>({
  reducer: {
    books: bookSlice,
   
  }
});
