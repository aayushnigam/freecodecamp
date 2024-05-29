import React from "react"; // Import React
import { Link } from "react-router-dom"; // Import Link component from React Router

function Home() {
  return (
    <div>
      <nav className="w-full bg-blue-500 p-4 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">freeCodeCamp</h1>
        <div className="max-w-md mx-auto hidden sm:block">
          <div className="relative flex items-left w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>

        <Link to="/signin" className="text-white bg-gray-700 px-6 py-3 rounded">
          Sign In
        </Link>
      </nav>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-3xl text-center mx-auto">
              {/* <p className="inline-block text-md font-large bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                Welcome to freeCodeCamp
              </p> */}
              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Learn to code - for FREE.
                </h1>
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Build projects.
                </h1>
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                  Earn certifications.
                </h1>
              </div>
              <div className="mt-16 gap-3 flex justify-center">
                <a
                  className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  href="/signin"
                >
                  Get started (It's FREE)
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-16 bg-white">
        <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
          <div className="m-auto text-center lg:w-5/6">
            <h6 className="text-2xl text-gray-700 font-bold md:text-3xl">
              Since 2014, more than 40,000 freeCodeCamp.org graduates have
              gotten jobs at tech companies including:
            </h6>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <div className="p-4">
              <img
                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
                className=""
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
                className="w-32 "
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
                className="w-32 "
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
                className="w-32 "
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
                className="w-32"
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
                className="w-32"
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
                className="w-20"
                alt=""
              />
            </div>
            <div className="p-4">
              <img
                src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
                className="w-24"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; // Export Home component
