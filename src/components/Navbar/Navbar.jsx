"use client";
import React, { useState } from "react";
import NavbarItem from "./NavbarItem";
import Link from "next/link";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className='flex gap-8 justify-center p-20'>
			<Link
				href={{ pathname: "/" }}
				className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
			>
				Home
			</Link>

			<div className='relative'>
				<button
					onClick={toggleDropdown}
					className='px-4 py-2 text-gray-800 hover:bg-gray-200 focus:outline-none'
				>
					Movies
				</button>
				{isOpen && (
					<div className='absolute -right-10 mt-2 bg-white border border-gray-300 rounded shadow-lg flex flex-col p-3 gap-2 w-40'>
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
					</div>
				)}
			</div>

			<Link
				href={{ pathname: "/actors/page" }}
				className='block px-4 py-2 text-gray-800 hover:bg-gray-200'
			>
				Actors
			</Link>
		</div>
	);
}
