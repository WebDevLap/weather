import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import ThemeSlice from "./slices/ThemeSlice";
import WeatherSlice from "./slices/WeatherSlice";
import HeaderSlice from "./slices/HeaderSlice";

export const store = configureStore({
  reducer: {
    theme: ThemeSlice,
    weather: WeatherSlice,
    header: HeaderSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
