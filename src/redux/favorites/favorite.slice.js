import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  favorites: [],
};
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (card) => card.id !== action.payload.id
      );
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
