import Link from "next/link";
import react from "react";
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute top-2/4	left-2/4 -translate-y-1/2 -translate-x-1/2">
        <div className="font-['Sacramento'] text-teal-50	text-10xl ">Jiko.</div>
        <div className=" text-center font-['Montserrat'] text-teal-50 text-20xl">
          A Quantified Self App
        </div>
        <div className="mr-5 inline">
          <Link href="/login">
            <a className="no-underline">
              <button className="ml-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-6 overflow-hidden text-21xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-10 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-5">
                <span className="relative font-['Montserrat'] px-12 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Login
                </span>
              </button>
            </a>
          </Link>

          <Link href="/register">
            <a className="no-underline">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-21xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-10 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-5">
                <span className="relative font-['Montserrat'] px-12 py-2.5 transition-all ease-in duration-200 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Register
                </span>
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
