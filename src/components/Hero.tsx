import React from "react";
import heroImage from "@/assets/banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#15171D] mt-6 sm:mt-8 lg:mt-[48px] container mx-auto border border-[#222630] rounded-[13px] grid grid-cols-1 lg:grid-cols-2 items-center p-5 sm:p-8 lg:p-[56px] gap-8 lg:gap-10">
      {/* right side text */}
      <div className="">
        <span className="text-[11px] font-bold text-[#C2F800]">
          WORKOUT LIBRARY
        </span>
        <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-[800] leading-[1.05] text-[#FFFFFF] w-full">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h2>
        <p className="my-4 sm:my-5 text-[14px] sm:text-[15px]  lg:text-[16px] leading-6 font-[400] text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          <br />
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        {/* hero button */}
        <div className="mt-[8px]">
          <button className="btn  rounded-[6px] py-[12px] px-[24px] text-[#000000] bg-[#C2F800] border-none">
            BROWSE WORKOUTS
          </button>
        </div>
      </div>

      {/* left side img */}
      <div>
        <Image
          src={heroImage}
          alt="hero-image"
          height={400}
          width={500}
          className="mx-auto"
        />
      </div>
    </section>
  );
};

export default Hero;
