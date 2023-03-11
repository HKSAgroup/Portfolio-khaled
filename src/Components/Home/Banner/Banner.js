import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import img from "../../../assets/images/Banner/artist.png";

const Banner = () => {
  const router = useRouter()



  return (
    <section className="bg-[#DFFBFF]">
      <div className="mid-container md:flex justify-center items-center">
        <div className="text-center md:text-start pt-10 md:pt-0">
          <h3 className="text-primary font-semibold text-2xl">I'm Khaled Hasan</h3>
          <h1 className="font-semibold text-5xl mt-2 text-info">Designer Developer <br /> & Marketer </h1>
          <p className="text-sm mt-5 text-neutral">Ehya is the Instagram analytics platform teams use to stay
            focused on the goals, track engagement for report your
            business .</p>

          <div className="flex justify-center md:justify-start mb-10 md:mb-0">
            <div className="flex items-center mt-10 justify-between bg-white rounded-full pl-10 pr-[5px] py-[5px] md:w-[82%] w-full">
              <h1 className="text-neutral">Your email address</h1>
              <button className="btn btn-primary text-white rounded-full px-6">Subscribe</button>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={img}
            alt="banner"
            width={800}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
