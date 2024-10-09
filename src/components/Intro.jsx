import React from "react";

const Intro = () => {
    return (
      <div className="dark:text-white flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          Wesley Franks
        </h1>
        <p className="text-base md:text-xl  mb-3 font-medium">
          Building solutions with code.
        </p>
        <p className="text-sm max-w-xl mb-6 font-bold">
          I’m Wesley Franks, an IT professional with a passion for
          problem-solving through code. I’ve had the opportunity to lead a team,
          where I utilized my leadership skills to guide projects to successful
          completion. I enjoy working with cloud functions, NodeJS, and writing
          scripts that retrieve data and visualize it in spreadsheets. I’m also
          committed to clear documentation and creating video training resources
          to help others learn and grow. <br />
          <br />
          With certifications in AWS, Azure, and CompTIA Security+, I’m
          constantly expanding my skill set to deliver scalable, efficient
          solutions. Currently, I am focused on mastering cloud technologies and
          automation tools like Terraform, and I document my journey through
          blogs and training content. <br />
          <br />
          If you’re interested in learning more about what I am learning or what
          projects I'm working on. Subscribe to my YouTube channel{' '}
          <a
            href="https://www.youtube.com/wesleyfranks"
            target="_blank"
            className="dark:text-sky-400 text-purple-700
          hover:underline underline-offset-2 
          decoration-2 decoration-red-600"
          >
            Wesley Franks
          </a>
          .
        </p>
      </div>
    );
}

export default Intro;