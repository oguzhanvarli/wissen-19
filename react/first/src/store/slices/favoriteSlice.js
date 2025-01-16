import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
  favoriteArray: []
}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    incremant: (state, action) => {
      let character = state.favoriteArray.find(x => x.id === action.payload.id)
      if (!character) {
        state.number += 1
        state.favoriteArray.push(action.payload)
      }
    }
  }
})

export const { incremant } = favoriteSlice.actions
export default favoriteSlice.reducer