import Image from "next/image";
import React from "react";
import footerLogo from "@/assets/footer.png";

const Footer = () => {
  return (
    <footer className="mt-[64px] bg-[#090A0D] border-t border-[#1A1D24] py-[40px]">
      {/* container div */}
      <div className="container mx-auto  flex flex-col sm:flex-row justify-between items-center">
        {/* footer image */}
        <div className="text-[#FFFFFF] flex gap-2 items-center font-bold">
          <Image src={footerLogo} alt="logo" width={20} height={20} />
          FITLOG
        </div>

        {/* footer text */}
        <div className="text-[#6B7280]">
          <p className="text-[14px] mt-4">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
