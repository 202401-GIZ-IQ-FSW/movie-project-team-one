import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../globalRedux/dataSlice";

export default function Data() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div>
			<h1 className="bg-pink-800">Posts</h1>
			{data.status === "loading" && <div>Loading...</div>}
			{data.status === "failed" && (
				<div>Error: {data.error}</div>
			)}
			{data.status === "succeeded" && (
				<ul>
					{data.results.map((post) => (
						<li key={post.id} className="bg-pink-300">
							{post.title}
							<div className="w-10 h-10">
							<img
								className='w-10 h-10 bg-slate-600'
								src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
							/>
							</div>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
