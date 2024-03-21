import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
} from "../redux/counterSlice";

export default function Counter() {
	const count = useSelector((state) => state.counter.value);
	const dispatch = useDispatch();

	return (
		<div>
			<button onClick={() => dispatch(increment())}>
				Increment
			</button>
			<span>{count}</span>
			<button onClick={() => dispatch(decrement())}>
				Decrement
			</button>
		</div>
	);
}
