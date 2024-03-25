'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import NavbarItem from "./NavItems";
import GenresList from "@/components/api/movies/genreListfetch";

export default function Navbar() {
	const [isMoviesOpen, setIsMoviesOpen] = useState(false);
	const [isGenresOpen, setIsGenresOpen] = useState(false);
	const [genres, setGenres] = useState([]);
	const user = null;

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const fetchedGenres = await GenresList();
				setGenres(fetchedGenres);
			} catch (error) {
				console.error("Error fetching genres:", error);
			}
		};

		fetchGenres();
	}, []);

	const toggleMoviesDropdown = () => {
		setIsMoviesOpen(!isMoviesOpen);
		setIsGenresOpen(false); // Close genres dropdown when opening movies dropdown
	};

	const toggleGenresDropdown = () => {
		setIsGenresOpen(!isGenresOpen);
		setIsMoviesOpen(false); // Close movies dropdown when opening genres dropdown
	};

	return (
		<div className='bg-slate-700 sticky z-50 top-0 flex h-16 items-center text-[#FDAE0D] w-screen px-16 justify-between'>
			<div className='ml-4 flex lg:ml-0'>
				<Image
					src='/img/logo/logo.png'
					alt='Logo'
					width={96}
					height={96}
				/>
			</div>
			<div className='justify-between w-full hidden md:flex'>
				<div className='ml-auto flex items-center'>
					<Link
						href={{ pathname: "/" }}
						className='block px-4 py-2  hover:text-gray-200 hover:animate-pulse hover:scale-105'
					>
						Home
					</Link>
					<div className='relative'>
						<button
							onClick={toggleMoviesDropdown}
							className='px-4 py-2 hover:text-gray-200 hover:animate-pulse hover:scale-105'
						>
							Movies
						</button>
						{isMoviesOpen && (
							<div className='absolute -right-10 mt-2 bg-slate-700 text-white rounded shadow-lg flex flex-col p-3 gap-2 w-40'>
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
					<div className='relative'>
						<button
							onClick={toggleGenresDropdown}
							className='px-4 py-2'
						>
							Genres
						</button>
						{isGenresOpen && (
							<div className='absolute -right-10 mt-2 bg-slate-700 text-white rounded shadow-lg flex flex-col p-3 gap-2 w-40'>
								{genres &&
									genres.map((genre) => (
										<NavbarItem
											key={genre.id}
											title={genre.name}
											param={`/genres/page?genreId=${genre.id}`}
											isGenre
										/>
									))}
							</div>
						)}
					</div>
					<Link
						href={{ pathname: "/actors/page" }}
						className='block px-4 py-2  hover:text-gray-200 hover:animate-pulse hover:scale-105'
					>
						Actors
					</Link>
					<Link
						href={{ pathname: "/about/page" }}
						className='block px-4 py-2  hover:text-gray-200 hover:animate-pulse hover:scale-105'
					>
						About
					</Link>
				</div>
				<div className='ml-auto flex items-center'>
					<div className='hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6'>
						{user ? null : (
							<Link href='/sign-in'>Sign in</Link>
						)}
						{user ? null : (
							<span
								className='h-6 w-px bg-gray-200'
								aria-hidden='true'
							></span>
						)}
						{user ? (
							<p></p>
						) : (
							<Link href='/sign-up'>Sign up</Link>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
