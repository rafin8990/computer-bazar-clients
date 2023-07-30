import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  builderData: [],
};

const pcBuilderSlice = createSlice({
  name: "pc_builder",
  initialState,
  reducers: {
    addToBuilder: (state, action) => {
      state.builderData.push(action.payload);
    },

    removeToBUild: (state, action) => {
      state.builderData = state.builderData.filter(
        (product) => product.id !== action.payload
      );
    },

    removeALlBuildComponents: (state) => {
      state.builderData = [];
    },
  },
});

export const { addToBuilder, removeToBUild, removeALlBuildComponents } =
  pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
