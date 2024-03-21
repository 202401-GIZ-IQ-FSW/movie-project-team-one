import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/counterSlice";
import dataReducer from "../redux/dataSlice";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		data: dataReducer,
	},
});
