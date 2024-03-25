import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavbarItem({ title, param }) {
	// To style the acive tab
	const searchParams = useSearchParams();
	const list = searchParams.get("list");

	return (
		<div className=' hover:bg-gray-200 hover:text-slate-700 rounded-lg pl-3'>
			<Link
				href={`/movies/page/?list=${param}`}
				className={`${
					list === param ? "text-yellow-300" : ""
				}`}
			>
				{title}
			</Link>
		</div>
	);
}