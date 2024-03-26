import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavbarItem({
	title,
	param,
	isGenre = false,
}) {
	// To style the active tab
	const searchParams = useSearchParams();
	const list = searchParams.get("list");
	const genreId = searchParams.get("genreId");

	return (
		<div className='hover:bg-gray-200 hover:text-slate-700 rounded-lg pl-3'>
			<Link
				href={
					isGenre
						? `/genres/page?genreId=${param}`
						: `/movies/page/?list=${param}`
				}
				className={`${
					isGenre
						? genreId === param
							? "text-yellow-300"
							: ""
						: list === param
						? "text-yellow-300"
						: ""
				}`}
			>
				{title}
			</Link>
		</div>
	);
}
