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
          className={`flex flex-col justify-between items-center bg-gray-100 text-gray-700 border border-gray-300 rounded-lg p-4 w-[15rem] h-[20rem] shadow-lg cursor-pointer relative overflow-hidden ${
            isLoading ? "loading" : ""
          }`}
        >
          {isLoading ? (
            <Shimmer />
          ) : (
            <>
              <motion.img
                className="w-24 h-24 rounded-full object-cover z-10 shadow-md"
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt={`${actor.name} profile`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4, type: "spring", stiffness: 120 }}
              />
              <motion.span
                className="text-gray-700 font-semibold text-lg z-10 relative"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4, type: "spring", stiffness: 120 }}
              >
                {actor.name}
              </motion.span>
              <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-300 z-10"></div>
              <motion.div
                className="absolute top-0 left-0 w-full h-full border border-gray-300 rounded-lg"
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
