"use client";
import { Typewriter } from "react-simple-typewriter";

const TypeCard = () => {
  return (
    <div className="w-full  bg-white">
      <br />
      <div className="design  text-white w-11/12 sm:w-4/5 md:w-3/4 lg:w-4/6 rounded-3xl h-auto min-h-[13rem] m-auto px-4 py-6">
        <div className="text">
          <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold">
            <Typewriter
              words={[
                "GRAPHIC DESIGN",
                "Logo Design",
                "Brand Identity",
                "Business Cards",
                "Social Media Graphics",
                "Brochure Design",
                "Flyer Design",
                "Web Banners",
                "Packaging Design",
                "Illustrations",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <button className="design-btn px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 rounded-2xl text-base sm:text-lg cursor-pointer">
            Get Started at Vizentoo
          </button>
        </div>
      </div>
      <br />
    </div>
  );
};
export default TypeCard;
