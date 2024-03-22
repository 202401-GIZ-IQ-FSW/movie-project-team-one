'use client';

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function NavbarItem({ title, param }) {
	// To style the acive tab
	const searchParams = useSearchParams();
	const genre = searchParams.get("genre");

	return <Link href={`/?genre=${param}`} className={`${genre===param? "text-yellow-400":"" }`}>{title}</Link>;
} 
