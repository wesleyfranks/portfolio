import React from "react";

const Intro = () => {
    return (
      <div className="dark:text-white flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
          Wesley Franks
        </h1>
        <p className="text-base md:text-xl  mb-3 font-medium">
          <strong>Let's Build</strong>
        </p>

        <p className="text-left text-sm max-w-xl mb-6">
          Welcome to my corner of the web! I’m an IT enthusiast who loves
          tackling problems with code. I've been in IT for over 10 years. Mostly
          helpdesk but recently I have been able to lead a team to help clients
          with their IT needs. As I began starting a family I decided to take a
          step back to find a way to stay home to be with my daughter and my
          wife. As I've taken my professional break I've studied and received
          certifications and learned how to get back into the job market looking
          for a remote job. I've since learned it's not as easy as it used to
          be.
          <br />
          <br />
          <p className="text-left text-sm max-w-xl mb-6">
            What I enjoy:
            <br />
            <br />
            <ol className="list-disc ml-6">
              <li>
                Building webapps to solve problems
              </li>
              <li>
                Learning new things
              </li>
              <li>
                Diving deep into a problem focusing all my brain power on it
              </li>
              <li>
                Creating content and making videos
              </li>
              <li>
                Having great conversations
              </li>
            </ol>
          </p>
          As I update this website you'll see content from YouTube videos and
          blog posts eventually as I update this website to support blog posts.
          Currently it's all manually updated. As finding a remote job is tough
          I am trying to set my sights on what I need for my family. From there
          I'd like to focus on side hustles to help us get ahead financially.
        </p>

        <p className="text-left text-sm max-w-xl mb-6">
          When I’m not coding, you might find me brainstorming my next project
          or writing blog posts about what I’m learning. I’m always on the
          lookout for new challenges and awesome collaborations.
        </p>

        <h2 className="text-xl font-semibold mb-2">Stay Connected!</h2>

        <p className="text-left text-sm max-w-xl">
          Curious about what I’m up to? Check out my YouTube channel{' '}
          <a
            href="https://www.youtube.com/wesleyfranks"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-sky-400 text-purple-700 hover:underline underline-offset-2 decoration-2 decoration-red-600"
          >
            Wesley Franks
          </a>
          , and subscribe to stay updated on my latest projects and tutorials.
        </p>
      </div>
    );
}

export default Intro;
