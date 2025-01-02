import React from "react";
import "./styles.css";

function AboutMe() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-500">
      <div class="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md m-3 fade-in ">
        <h1 class="text-3xl font-bold text-center text-blue-600 mb-6">
          About Me
        </h1>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">
            Personal Details
          </h2>
          <p>
            <span class="font-semibold">Name:</span> Balwan Singh Rajput
          </p>
          <p>
            <span class="font-semibold">Class and Stream:</span> 12th, PCB
            (Physics, Chemistry, Biology)
          </p>
          <p>
            <span class="font-semibold">School Name:</span> Government Model
            School, Bheesha Kedee Sonktch
          </p>
          <p>
            <span class="font-semibold">Location:</span> Dhaturiyaram sonktch
          </p>
          <p>
            <span class="font-semibold">Phone Number:</span> 7067010548
          </p>
          <p>
            <span class="font-semibold">Gmail:</span>{" "}
            balwansinghrajput1708@gmail.com
          </p>

          <h3 class="mt-4 font-semibold">Family Information:</h3>
          <p>
            <span class="font-semibold">Family Members:</span> My family members
            Father, Mother, Brother and Me
          </p>
          <p>
            <span class="font-semibold">Father's Occupation:</span> My Father is
            farmer
          </p>
          <p>
            <span class="font-semibold">Mother's Role:</span> My Mother is House
            wife
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">
            My Coding Journey
          </h2>
          <p>
            <span class="font-semibold">When I Started Coding:</span> I started
            coding in 2024 class 11th February, .
          </p>
          <p>
            <span class="font-semibold">First Learnings:</span> My initial
            learnings HTML.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">
            Experience with CodeYogi
          </h2>
          <p>
            <span class="font-semibold">Joining CodeYogi:</span> I joined
            CodeYogi in February 2024.
          </p>
          <p>
            <span class="font-semibold">Learnings at CodeYogi:</span> I have
            learned HTML, CSS, JavaScript,TypeScript, React, OOPS this program.
          </p>
          <p>
            <span class="font-semibold">Coding Practice:</span> I practice
            coding using Phone and Computer
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">
            Additional Achievements
          </h2>
          {/* <p>
            <span class="font-semibold">Competitions:</span>.
          </p> */}
          <p>
            <span class="font-semibold">Awards:</span> I earned My coding
            certificate by collector sir.
          </p>
          <p>
            <span class="font-semibold">Other Skills:</span> Apart from coding,
            I have also gained knowledge in ms-word , Telly, Excel.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-semibold text-gray-700 border-b pb-2 mb-4">
            Future Plans
          </h2>
          <p>
            <span class="font-semibold">Dream:</span> I aspire to become a Full
            Stack Web Developer.
          </p>
          <p>
            <span class="font-semibold">Reason:</span> I want to achieve this
            goal because I am hardworking.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutMe;
