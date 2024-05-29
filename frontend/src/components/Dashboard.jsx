import React, { useEffect, useState } from "react"; // Import React, useEffect and useState hooks
import axios from "axios"; // Import axios for making HTTP requests
import { Link } from "react-router-dom";

function Dashboard() {
  const [courses, setCourses] = useState([]); // State for courses

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await axios.get("http://localhost:5000/api/courses"); // Make GET request to fetch courses
      setCourses(res.data); // Set courses state
    };
    fetchCourses(); // Fetch courses on component mount
  }, []);

  return (
    <div>
      <nav className="w-full bg-indigo-500 p-4 flex justify-between items-center">
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

        <Link to="/" className="text-white bg-indigo-600 px-6 py-3 rounded">
          Menu
        </Link>
      </nav>
      <div className="relative overflow-hidden min-h-screen bg-gray-100">
        {/* Gradients */}
        <div aria-hidden="true" className="absolute top-0 left-0 w-full h-full">
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] -translate-y-[20rem] dark:from-violet-900/50 dark:to-purple-900"></div>
          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] -translate-y-[10rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
        </div>
        {/* End Gradients */}
        <div className="max-w-2xl text-center mx-auto mt-8">
          <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
            "I have not failed. I've just found 10,000 ways that won't work." -
            Thomas A. Edison
          </p>

          {/* Title */}
          <div className="mt-8 max-w-2xl mb-15">
            <h1 className="block font-semibold text-gray-800 text-3xl md:text-3xl lg:text-3xl dark:text-gray-200">
              Welcome to freeCodeCamp.org
            </h1>
          </div>
          {/* End Title */}

            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0 mt-10">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
                >
                  {/* <h3 className="mb-3 text-xl font-bold text-indigo-600">
                    Beginner
                  </h3> */}
                  <div className="relative">
                    {/* <img className="w-full rounded-xl" src={course.image} alt={course.title} /> */}
                    <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
                      {course.price}
                    </p>
                  </div>
                  <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">
                    {course.title}
                  </h1>
                  <div className="my-4">
                    <div className="flex space-x-1 items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-indigo-600 mb-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <p>{course.duration}</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-indigo-600 mb-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <p>8 Modules</p>
                    </div>
                    <div className="flex space-x-1 items-center">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-indigo-600 mb-1.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </span>
                      <p>Tech Stack</p>
                    </div>
                    <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
                      Enroll Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard; // Export Dashboard component
