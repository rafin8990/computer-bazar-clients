import { configureStore } from "@reduxjs/toolkit";
import pcBuilderSlice from "./pcBuilder/pcBuilderSlice";

export const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderSlice,
  },
});
