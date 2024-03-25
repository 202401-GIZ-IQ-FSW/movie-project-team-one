import Link from "next/link";
import { motion } from "framer-motion";
import "./style.css"

const Shimmer = () => (
  <div className="shimmer-wrapper">
    <div className="shimmer"></div>
  </div>
);

export default function DisplayActorCard({ actor }) {
  const isLoading = !actor;

  return (
    <div className="justify-center items-center">
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
          className={`flex flex-col justify-between items-center gap-3 bg-gradient-to-br from-yellow-200 to-yellow-300 border border-yellow-400 rounded-lg p-4 w-[15rem] shadow-md cursor-pointer relative overflow-hidden ${
            isLoading ? "loading" : ""
          }`}
        >
          {isLoading ? (
            <Shimmer />
          ) : (
            <>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-40 pointer-events-none"></div>
              <motion.img
                className="w-24 h-24 rounded-full object-cover z-10"
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt={`${actor.name} profile`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: "spring", stiffness: 120 }}
              />
              <motion.span
                className="text-yellow-900 font-semibold text-lg z-10 relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 120 }}
              >
                {actor.name}
              </motion.span>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 z-10"></div>
              <motion.div
                className="absolute top-0 left-0 w-full h-full border border-yellow-400 rounded-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4, type: "spring", stiffness: 120 }}
              ></motion.div>
            </>
          )}
        </motion.div>
      </Link>
    </div>
  );
}
