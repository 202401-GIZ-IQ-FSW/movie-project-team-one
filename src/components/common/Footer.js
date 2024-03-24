import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebookF,
	faTwitter,
	faPinterestP,
	faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<footer className='bg-gray-800 text-white'>
			<div className='container mx-auto py-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					<div className='col-span-1 md:col-span-2'>
						<div className='footer-logo'>
							<a href='index.html'>
								<Image
									src='/img/logo.png'
									alt='Logo'
									width={200}
									height={50}
								/>
							</a>
						</div>
					</div>
					<div className='col-span-1 md:col-span-1 lg:text-right'>
						<nav className='footer-menu'>
							<ul className='flex justify-center md:justify-end space-x-6'>
								<li>
									<a href='index.html'>HOME</a>
								</li>
								<li>
									<a href='index.html'>MOVIE</a>
								</li>
								<li>
									<a href='index.html'>TV SHOW</a>
								</li>
								<li>
									<a href='index.html'>PAGES</a>
								</li>
								<li>
									<a href='pricing.html'>PRICING</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className='lg:flex lg:justify-between lg:items-center'>
						<div className='lg:text-left'>
							<div className='quick-link-list'>
								<ul className='flex justify-center md:justify-start space-x-6'>
									<li>
										<a href='#'>FAQ</a>
									</li>
									<li>
										<a href='#'>HELP CENTER</a>
									</li>
									<li>
										<a href='#'>TERMS OF USE</a>
									</li>
									<li>
										<a href='#'>PRIVACY</a>
									</li>
								</ul>
							</div>
						</div>
						<div className='lg:text-right'>
							<div className='footer-social flex justify-center md:justify-end space-x-4'>
								<a
									href='#'
									className='text-gray-400 hover:text-gray-500'
								>
									<FontAwesomeIcon icon={faFacebookF} />
								</a>
								<a
									href='#'
									className='text-gray-400 hover:text-gray-500'
								>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
								<a
									href='#'
									className='text-gray-400 hover:text-gray-500'
								>
									<FontAwesomeIcon icon={faPinterestP} />
								</a>
								<a
									href='#'
									className='text-gray-400 hover:text-gray-500'
								>
									<FontAwesomeIcon icon={faLinkedinIn} />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bg-gray-900 py-4'>
				<div className='container mx-auto'>
					<div className='text-center md:text-left'>
						<p>
							&copy; {new Date().getFullYear()}. All Rights
							Reserved By{" "}
							<a
								href='index.html'
								className='text-yellow-300'
							>
								Team One
							</a>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
