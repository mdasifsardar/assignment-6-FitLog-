import React from "react";
import heroImage from "@/assets/banner.png";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-[#15171D] mt-[48px] container mx-auto border border-[#222630] rounded-[13px] grid grid-cols-2 items-center p-[56px]">
      {/* right side text */}
      <div className="">
        <span className="text-[11px] font-bold text-[#C2F800]">
          WORKOUT LIBRARY
        </span>
        <h2 className="text-[60px] font-[800] text-[#FFFFFF] w-full">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h2>
        <p className="my-[20px] text-[16px] font-[400] text-[#9CA3AF]">
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
          className="mx-auto "
        />
      </div>
    </section>
  );
};

export default Hero;
