import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../redux/dataSlice";

export default function Data() {
	const dispatch = useDispatch();
	const data = useSelector((state) => state.data);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div>
			<h1>Posts</h1>
			{data.status === "loading" && <div>Loading...</div>}
			{data.status === "failed" && (
				<div>Error: {data.error}</div>
			)}
			{data.status === "succeeded" && (
				<ul>
					{data.results.map((post) => (
						<li key={post.id}>{post.title}</li>
					))}
				</ul>
			)}
		</div>
	);
}
