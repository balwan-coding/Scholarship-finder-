import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-5 bg-indigo-500">
      <h1
        className="relative mt-6 text-2xl font-bold text-center text-white sm:text-5xl lg:text-5xl md:text-5xl fade-in 
               after:absolute after:left-0 after:bottom-[-6px] after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      >
        Welcome To Apni Scholarships
      </h1>

      <Link
        className="flex items-center justify-center gap-2 p-3 mt-10 text-xl font-extrabold text-white transition-colors duration-300 ease-in-out bg-green-600 border-none rounded-lg hover:bg-green-700 fade-in"
        to="/Scholar"
      >
        Scholarships <FaArrowRight />
      </Link>

      <p className="px-6 mt-4 text-lg text-center text-white fade-in">
        Our website is a <strong>Scholarships Finder App</strong>, designed to
        provide students with information about various scholarships and
        financial aid opportunities. This app serves as a useful tool for
        students who are looking for financial assistance to continue their
        education.
      </p>

      <p className="px-6 mt-4 text-lg text-center text-white fade-in">
        <strong>Main Features:</strong>
      </p>

      <ul className="px-8 text-lg text-left text-white list-disc fade-in">
        <li>
          <strong>Information about various scholarships:</strong> This app
          provides students with detailed information about scholarships offered
          by educational institutions, government schemes, and private
          organizations.
        </li>
        <li>
          <strong>Filter options:</strong> The app allows students to search for
          scholarships based on different categories such as subject, course,
          country, and eligibility criteria.
        </li>
        <li>
          <strong>Updates on new scholarships:</strong> The app is regularly
          updated with new and relevant scholarship information, ensuring that
          students never miss important opportunities.
        </li>
        <li>
          <strong>Easy application process:</strong> Through this app, students
          can get information about the application process for scholarships,
          making it easier for them to apply.
        </li>
        <li>
          <strong>User-friendly interface:</strong> The app provides a simple
          and intuitive interface, ensuring that students can easily access
          scholarship information and apply without any difficulty.
        </li>
      </ul>

      <p className="px-6 mt-6 text-lg text-center text-white fade-in">
        The purpose of this website/app is to assist students in securing
        financial aid to fulfill their educational dreams.
      </p>
    </div>
  );
}

export default HomePage;
