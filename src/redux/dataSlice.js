import {
	createSlice,
	createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.API_KEY;

export const fetchData = createAsyncThunk(
	"data/fetchData",
	async () => {
		const response = await axios.get(
			`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
		);
    console.log('response',response.data);
		return response.data.results;
	}
);

export const dataSlice = createSlice({
	name: "data",
	initialState: {
		results: [],
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.pending, (state) => {
				state.status = "loading";
			})
			.addCase(fetchData.fulfilled, (state, action) => {
				state.status = "succeeded";
        state.results = action.payload;
        // console.log("action", state.results);
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message;
			});
	},
});

export default dataSlice.reducer;
