
```markdown
# Course List Application

This application displays a list of courses using styled cards. The courses are dynamically fetched and rendered using React and Tailwind CSS.

## Features

- **Dynamic Rendering**: Courses are fetched from an API and displayed in styled cards.
- **Responsive Design**: The layout is responsive and adjusts to different screen sizes.
- **Hover Effects**: Cards have hover effects for better user interaction.

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/aayushnigam/freecodecamp.git
    ```

2. Navigate to the project directory:

    ```sh
    cd frontend
    ```

3. Install dependencies:

    ```sh
    npm install
    ```

## Usage

1. Start the development server:

    ```sh
    npm run dev
    ```

2. Open your browser and navigate to `http://localhost:5173` to see the application in action.

## Code Structure

The main component that renders the course list is as follows:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CourseList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Fetch the course data when the component mounts
    axios.get('http://localhost:5000/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tr from-red-300 to-yellow-200 flex justify-center items-center py-20">
      <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
        {courses.map((course) => (
          <div key={course.title} className="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
            <h3 className="mb-3 text-xl font-bold text-indigo-600">{course.level}</h3>
            <div className="relative">
              <img className="w-full rounded-xl" src={course.image} alt={course.title} />
              <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{course.price}</p>
            </div>
            <h1 className="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{course.title}</h1>
            <div className="my-4">
              <div className="flex space-x-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <p>{course.duration}</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </span>
                <p>{course.parts} Parts</p>
              </div>
              <div className="flex space-x-1 items-center">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </span>
                <p>{course.technology}</p>
              </div>
              <button className="mt-4 text-xl w-full text-white bg-indigo-600 py-2 rounded-xl shadow-lg">Buy Lesson</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseList;
```

## API

The application fetches course data from a REST API endpoint. Ensure your API server is running and accessible at `http://localhost:5000/api/courses`.

## Styling

The application uses Tailwind CSS for styling. The cards have a hover effect and responsive design for different screen sizes. You can customize the styles further in the `tailwind.config.js` file.

## Contributing

Feel free to fork this repository and submit pull requests. Contributions are welcome!


```
