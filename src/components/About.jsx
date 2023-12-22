/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const treshold = 500;

      setIsVisible(scrollY > treshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative flex flex-col max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 p-7 bg-gradient-to-b from-black to-highlight bg-cover md:flex-row">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 items-center">
        <div
          className={`transition-transform ease-in-out duration-500 transform mx-auto justify-center items-center ${
            isVisible ? "fade-in.active" : "fade-in"
          }`}
        >
          <img
            className="w-full md:w-80 h-50 shadow-2xl rounded-3xl my-8 md:my-0"
            src="./profile.png"
            alt="Photo"
          />
        </div>

        <div
          className={`transition-transform ease-in-out duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          } max-w-5xl mx-auto py-5 text-left rounded-md`}
        >
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-3xl lg:leading-tight">
            <span className="bg-clip-text bg-gradient-to-t from-darkcyan to-highlight text-transparent font-bebas p-3">
              Design
            </span>
          </h1>
          <p className="mt-3 text-md text-bgcolor p-5 shadow-xl">
            I'm probably not the typical designer positioned behind an
            Illustrator artboard adjusting pixels, but I design. Immersed in
            stylesheets tweaking font sizes and contemplating layouts is where
            you'll find me (~_^). I'm committed to creating fluent user
            experiences while staying fashionable.
          </p>
        </div>

        <div
          className={`transition-transform ease-in-out duration-1000 transform ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          } max-w-5xl mx-auto text-left rounded-md`}
        >
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-3xl lg:leading-tight">
            <span className="bg-clip-text bg-gradient-to-t from-darkcyan to-highlight text-transparent font-bebas p-3">
              Engineering
            </span>
          </h1>
          <p className="text-md text-bgcolor p-5 shadow-xl">
            In building JavaScript applications, I'm equipped with just the
            right tools, and can absolutely function independently of them to
            deliver fast, resilient solutions optimized for scale — performance
            and scalabilty are priorities on my radar.
          </p>
        </div>

        <div
          className={`transition-transform ease-in-out duration-1000 transform ${
            isVisible
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          } max-w-5xl mx-auto  text-left rounded-md`}
        >
          <h1 className="block text-3xl font-bold sm:text-4xl lg:text-3xl lg:leading-tight">
            <span className="bg-clip-text bg-gradient-to-t from-darkcyan to-highlight text-transparent font-bebas p-3">
              Experience
            </span>
          </h1>
          <p className="text-md text-bgcolor p-5 shadow-xl">
            I've been working as an IT Support at PT. Sumber Pangan Perkasa for
            a year, where I focus on troubleshooting tech issues and ensuring
            our systems run smoothly. Outside of my job, I've spent the last
            five years freelancing as a Web Developer and Android Apps
            Developer. I specialize in creating user friendly websites using
            HTML, CSS, and JavaScript. Additionally, I've developed Android apps
            using Kotlin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
