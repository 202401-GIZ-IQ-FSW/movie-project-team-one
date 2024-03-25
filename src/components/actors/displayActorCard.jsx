import Link from "next/link";
import { motion } from "framer-motion";
import "./style.css";

const Shimmer = () => (
  <div className="shimmer-wrapper">
    <div className="shimmer"></div>
  </div>
);

export default function DisplayActorCard({ actor }) {
  const isLoading = !actor;

  return (
		<div className='justify-center items-center'>
			<Link
				href={{
					pathname: `/actors/actorDetails`,
					query: { id: `${actor.id}` },
				}}
				replace
			>
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					transition={{ duration: 0.3, ease: "easeInOut" }}
					className={`flex flex-col justify-between items-center bg-gray-100 text-gray-700 border border-gray-300 rounded-lg p-4 w-[15rem] h-[20rem] shadow-lg cursor-pointer relative overflow-hidden ${
						isLoading ? "loading" : ""
					}`}
				>
					{isLoading ? (
						<Shimmer />
					) : (
						<>
							<motion.img
								className='w-24 h-24 rounded-full object-cover z-10 shadow-md'
								src={
									actor.profile_path
										? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
										: actor.gender === 1
										? "https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?t=st=1711409090~exp=1711412690~hmac=faa51a239ec3af2843e756de28b06e493174b7633faaad56ed732b428d9202b3&w=1380"
										: "https://img.freepik.com/free-vector/illustration-businesswoman_53876-5857.jpg?t=st=1711409052~exp=1711412652~hmac=82c4dd83e7e3965d65b6461a0fa22c7c8ba4935881ae5496a7cf499eef0c68f0&w=1380"
								}
								alt={`${actor.name} profile`}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									delay: 0.1,
									duration: 0.4,
									type: "spring",
									stiffness: 120,
								}}
							/>
							<motion.span
								className='text-gray-700 font-semibold text-lg z-10 relative'
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									delay: 0.2,
									duration: 0.4,
									type: "spring",
									stiffness: 120,
								}}
							>
								{actor.name}
							</motion.span>
							<div className='absolute bottom-0 left-0 w-full h-2 bg-gray-300 z-10'></div>
							<motion.div
								className='absolute top-0 left-0 w-full h-full border border-gray-300 rounded-lg'
								initial={{ opacity: 0, scale: 0.8 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									delay: 0.3,
									duration: 0.4,
									type: "spring",
									stiffness: 120,
								}}
							></motion.div>
						</>
					)}
				</motion.div>
			</Link>
		</div>
	);
}
