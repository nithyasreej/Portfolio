import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Profile
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Innovative and results-driven Computer Science and Engineering student with a strong foundation in machine
            learning, deep learning, and software development. Adept at problem-solving and eager to apply skills to real
            world challenges in a collaborative and fast-paced environment. Proven track record of leading projects and
            achieving academic excellence.
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Professional Experience
          </h2>

          <div className="mb-4">
            <h3 className="text-lg md:text-xl text-left w-full capitalize">
              Research Intern
            </h3>
            <p className="text-sm md:text-base">
              June 2024 – Present
              <br />
              College Of Engineering Guindy, Anna University Chennai, India
              <br />
              • Conducting advanced research on deepfake detection using vision transformers on facial organs under Head of the Department of Computer Science and Engineering, Dr. V. Mary Anita Rajam.
              <br />
              • Developed novel techniques to improve deepfake detection accuracy through innovative approaches and cutting-edge technology.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl text-left w-full capitalize">
              SDE Intern
            </h3>
            <p className="text-sm md:text-base">
              July 2024 – Present
              <br />
              GrapplTech Remote
              <br />
              • Assisting in the Frontend development of a scalable Hero-section in the web application using HTML, CSS and React Js.
              <br />
              • Collaborated with cross-functional teams to gather requirements and ensure timely delivery of features.
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}
        >
          <h2 className="text-xl md:text-2xl text-left w-full capitalize">
            Skills
          </h2>
          <p className="font-light text-xs sm:text-sm md:text-base">
            Programming Languages: C/C++, Java, Python, SQL, HTML, CSS, JavaScript, React JS
            <br />
            Technologies: React, Deep Learning, Machine Learning, Data Structures and Algorithms, Computer Vision
            <br />
            Tools: TensorFlow, Keras, PyTorch, OpenCV, Git, PowerShell, MySQL
            <br />
            Soft Skills: Leadership, Communication, Team Collaboration, Problem Solving
          </p>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
