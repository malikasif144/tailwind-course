import React from "react";
import Typed from "react-typed";

const Banner = () => {
  return (
    <div className="bg-[#2699fb] py-[80px] text-center w-full">
      <div className="max-w-[1240px] mx-auto  my-[40px] font-bold">
        <div className="text-xl md:text-3xl  ">Learn with us</div>
        <h1 className="text-white text-[30px] md:text-[60px] ">
          Grow with us.
        </h1>
        <h3 className="text-[25px] md:text-[50px] ">
          Learn
          <Typed
            className="pl-2"
            strings={[
              "Web Development",
              "Digital Marketing",
              "Ethical Hacking",
            ]}
            typeSpeed={100}
            loop={true}
            backSpeed={50}
          />
        </h3>
      </div>
      <button className="bg-black text-white p-3 rounded">Get Started</button>
    </div>
  );
};

export default Banner;
