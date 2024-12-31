import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600 dark:text-primary">Contact Me</h1>
      <p className="text-center text-muted-foreground mb-12">
        I'd love to hear from you! Whether you have feedback, questions, or collaboration ideas, feel free to reach out.
      </p>
      <form className="max-w-xl mx-auto bg-background border-gray-300 border-2 dark:border-none shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <label htmlFor="name" className="block text-muted-foreground mb-2">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 dark:border-gray-700  py-3 px-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-muted-foreground mb-2">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 dark:border-gray-700  py-3 px-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-muted-foreground mb-2">Message</label>
          <textarea
            id="message"
            // className="w-full px-4 py-2 border border-muted rounded focus:outline-none focus:ring-2 focus:ring-primary"
             className="w-full border border-gray-300 dark:border-gray-700  py-3 px-4 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 dark:focus:ring-primary focus:outline-none"
            rows={5}
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600  text-white dark:bg-primary dark:text-primary-foreground py-2 px-4 rounded hover:bg-primary-dark transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
