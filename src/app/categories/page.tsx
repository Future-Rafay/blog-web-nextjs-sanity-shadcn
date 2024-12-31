// import Link from "next/link";
// import React from "react";

// const categories = [
//   {
//     name: "Web Devlopment",
//     description: "Latest updates, tutorials, and trends in the tech world.",
//     image: "/images/categories/webdev.png", // Replace with your image path
//     link: "/categories/technology",
//   },
//   {
//     name: "Islamic",
//     description: "Insights into UI/UX design, inspiration, and tools.",
//     image: "/images/categories/islamic.jpeg", // Replace with your image path
//     link: "/categories/design",
//   },
//   {
//     name: "Nature",
//     description: "Coding tips, frameworks, and best practices.",
//     image: "/images/categories/nature.webp", // Replace with your image path
//     link: "/categories/development",
//   },
// ];

// const CategoriesPage = () => {
//   return (
//     <div className="bg-gray-50 py-10 px-4 sm:px-8">
//       {/* Hero Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">Explore Categories</h1>
//         <p className="text-lg text-gray-600">
//           Discover articles tailored to your interests. Dive into various topics and stay inspired.
//         </p>
//       </div>

//       {/* Search Bar */}
//       <div className="max-w-md mx-auto mb-10">

//           type="text"
//           placeholder="Search categories..."
//           className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
//         />
//       </div>

//       {/* Categories Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {categories.map((category) => (
//           <div
//             key={category.name}
//             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
//           >
//             <Link href={category.link}>
//               <div className="relative">
//                 <img
//                   src={category.image}
//                   alt={category.name}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-40 transition duration-300"></div>
//               </div>
//               <div className="p-6">
//                 <h2 className="text-xl font-bold text-gray-800">{category.name}</h2>
//                 <p className="text-gray-600 mt-2">{category.description}</p>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>

//       {/* Featured Section */}
//       <div className="mt-16">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6">Featured Categories</h2>
//         <div className="flex flex-wrap gap-6">
//           {categories.slice(0, 2).map((category) => (
//             <div
//               key={category.name}
//               className="flex items-center bg-primary text-primary-foreground rounded-lg p-6 w-full sm:w-1/2 hover:shadow-lg transition-shadow"
//             >
//               <img
//                 src={category.image}
//                 alt={category.name}
//                 className="w-16 h-16 object-cover rounded-md mr-4"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold">{category.name}</h3>
//                 <p className="text-sm">{category.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoriesPage;
import Link from "next/link";
import React from "react";

const categories = [
  {
    name: "Web Development",
    description: "Learn the latest web technologies, frameworks, and best practices.",
    image: "/images/categories/webdev.png", // Replace with your image path
    link: "/categories/web-development",
  },
  {
    name: "Islamic",
    description: "Explore Islamic teachings, history, and spiritual insights.",
    image: "/images/categories/islamic.jpeg", // Replace with your image path
    link: "/categories/islamic",
  },
  {
    name: "Nature",
    description: "Dive into the beauty of nature and discover its wonders.",
    image: "/images/categories/nature.webp", // Replace with your image path
    link: "/categories/nature",
  },
];

const CategoriesPage = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-8">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Explore Categories
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Discover articles tailored to your interests. Dive into various topics and stay inspired.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder="Search categories..."
          className="w-full border border-gray-300 dark:border-gray-700 rounded-md py-3 px-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={category.link}>
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-40 transition duration-300"></div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                  {category.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{category.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Featured Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Featured Categories
        </h2>
        <div className="flex flex-wrap gap-6">
          {categories.slice(0, 2).map((category) => (
            <div
              key={category.name}
              className="flex items-center bg-primary text-primary-foreground dark:bg-gray-700 dark:text-gray-200 rounded-lg p-6 w-full sm:w-1/2 hover:shadow-lg transition-shadow"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-16 h-16 object-cover rounded-md mr-4"
              />
              <div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
