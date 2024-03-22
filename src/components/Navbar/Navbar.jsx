import React from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

export default function Navbar() {
	return (
		<div className='flex gap-8 justify-center p-20'>
			<NavbarItem
				title='Popular'
				param='popular'
			/>
			<NavbarItem
				title='Top Rated'
				param='top_rated'
			/>
			<NavbarItem
				title='Now Playing'
				param='now_playing'
			/>
			<NavbarItem
				title='Upcoming'
				param='upcoming'
			/>
			<Link
				href={{
					pathname: "/actors/page",
				}}
			>
				Actors
			</Link>
		</div>
	);
}
