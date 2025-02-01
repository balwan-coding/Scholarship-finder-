import React from "react";
import "./styles.css";
import { HiArrowLongLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="flex flex-col justify-center min-h-screen bg-indigo-500">
      <div className="flex items-start ml-2">
        <Link
          className="flex items-center justify-center gap-2 p-3 mt-10 text-xl font-extrabold text-white bg-transparent border border-black rounded-lg hover:bg-gray-800 fade-in"
          to="/Scholar"
        >
          <HiArrowLongLeft />
          back
        </Link>
      </div>
      <div className="max-w-4xl p-6 m-3 mx-auto bg-white rounded-md shadow-md fade-in ">
        <h1 className="mb-6 text-3xl font-bold text-center text-blue-600">
          About Me
        </h1>

        <section className="mb-8">
          <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-700 border-b">
            Personal Details
          </h2>
          <p>
            <span className="font-semibold">Name:</span> Balwan Singh Rajput
          </p>
          <p>
            <span className="font-semibold">Class and Stream:</span> 12th, PCB
            (Physics, Chemistry, Biology)
          </p>
          <p>
            <span className="font-semibold">School Name:</span> Government Model
            School, Bheesa Kedee Sonktch
          </p>
          <p>
            <span className="font-semibold">Location:</span> Dhaturiyaram
            sonaktch
          </p>
          <p>
            <span className="font-semibold">Phone Number:</span> 7067010548
          </p>
          <p>
            <span className="font-semibold">Gmail:</span>{" "}
            balwansinghrajput1708@gmail.com
          </p>

          <h3 className="mt-4 font-semibold">Family Information:</h3>
          <p>
            <span className="font-semibold">Family Members:</span> My family
            members Father, Mother, Brother and Me
          </p>
          <p>
            <span className="font-semibold">Father's Occupation:</span> My
            Father is farmer
          </p>
          <p>
            <span className="font-semibold">Mother's Role:</span> My Mother is
            House wife
          </p>
        </section>

        <section className="mb-8">
          <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-700 border-b">
            My Coding Journey
          </h2>
          <p>
            <span className="font-semibold">When I Started Coding:</span> I
            started coding in 2024 class 11th February, .
          </p>
          <p>
            <span className="font-semibold">First Learnings:</span> My initial
            learnings HTML.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-700 border-b">
            Experience with CodeYogi
          </h2>
          <p>
            <span className="font-semibold">Joining CodeYogi:</span> I joined
            CodeYogi in February 2024.
          </p>
          <p>
            <span className="font-semibold">Learnings at CodeYogi:</span> I have
            learned HTML, CSS, JavaScript,TypeScript, React, OOPS this program.
          </p>
          <p>
            <span className="font-semibold">Coding Practice:</span> I practice
            coding using Phone and Computer
          </p>
        </section>

        <section className="mb-8">
          <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-700 border-b">
            Additional Achievements
          </h2>
          {/* <p>
            <span className="font-semibold">Competitions:</span>.
          </p> */}
          <p>
            <span className="font-semibold">Awards:</span> I earned My coding
            certificate by collector sir.
          </p>
          <p>
            <span className="font-semibold">Other Skills:</span> Apart from
            coding, I have also gained knowledge in ms-word , Telly, Excel.
          </p>
        </section>

        <section>
          <h2 className="pb-2 mb-4 text-2xl font-semibold text-gray-700 border-b">
            Future Plans
          </h2>
          <p>
            <span className="font-semibold">Dream:</span> I aspire to become a
            Full Stack Web Developer.
          </p>
          <p>
            <span className="font-semibold">Reason:</span> I want to achieve
            this goal because I am hardworking.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
