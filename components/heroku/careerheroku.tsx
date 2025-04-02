"use client";
import Image from "next/image";
import Link from "next/link";

const JoinOurTeam = () => {
  return (
    <div className="bg-white dark:bg-black flex items-center justify-center min-h-screen p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-semibold text-black dark:text-white mb-4">
            JOIN OUR TEAM
          </h1>
          <p className="text-gray-800 dark:text-gray-200 mb-6">
            Join our diverse group of innovators, working together to solve
            peoples' and organizations’ financial problems. Use leading-edge
            technologies and strategies to reinvent the way every job is done
            and help improve the way the world works and lives.{" "}
          </p>
          <Link href="#openings">
            <button className="bg-blue-600 dark:bg-white text-white dark:text-black py-2 px-6 rounded-full hover:bg-gray-800 dark:hover:bg-gray-300 transition duration-300">
              SEE OPEN JOBS
            </button>
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="https://storage.googleapis.com/a1aa/image/UvEzUybwrbwgI_BWPeBvjNrRiMf9cQfa9ypxNCFgICM.jpg"
            alt="Illustration of a person sitting with a laptop"
            width={400}
            height={400}
            className="w-3/4 md:w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
