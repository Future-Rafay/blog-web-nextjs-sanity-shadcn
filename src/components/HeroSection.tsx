import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/images/heroimage.jpg')", // Replace with your image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-6 md:px-8 lg:px-12 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Welcome to <span className="text-primary">FR Blog</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8">
          Dive into my world of technology, creativity, and insights. Explore tutorials, project ideas, and tips to inspire your next adventure.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/about"
            className="bg-primary text-primary-foreground py-2 px-4 sm:py-3 sm:px-6 rounded-md shadow hover:bg-primary-dark transition duration-300"
          >
            Learn More
          </Link>
          <Link
            href="/contact"
            className="bg-white text-primary py-2 px-4 sm:py-3 sm:px-6 rounded-md shadow hover:bg-gray-200 transition duration-300"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

