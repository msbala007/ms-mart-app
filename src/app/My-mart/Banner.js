"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Dress from "../Image/dress.jpg";
import Watch from "../Image/watch.jpg";
import Disk from "../Image/gadgets.jpg";
import Shoe from "../Image/shoe.jpg";
import Image from "next/image";
// import Link from "next/link";
import { Link, animateScroll as scroll } from "react-scroll";

const Banner = () => {
  return (
    <div className="h-[500px] sm:h-64 md:h-64 relative space-y-4  ">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        interval={5000}
        showArrows={false}
        showThumbs={false}
        className="h-[500px] sm:h-64 md:h-64 w-full absolute space-y-4 mt-2"
      >
        <div className="h-[500px] sm:h-64 md:h-64 relative space-y-4 ">
          <Image
            className=" object-fit  h-[500px] sm:h-64 md:h-64 bg-black opacity-50 -z-50"
            src={Dress}
            alt="banner"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center h-full w-full">
            <h1
              className="text-6xl font-bold text-white text-center xl:text-8xl 
             lg:text-7xl sm:text-3xl  md:text-3xl  w-full "
            >
              Level up your style with our <br /> collections
            </h1>
            <div className="space-y-6 mt-8 animate-bounce">
              <Link
                activeClass="active"
                to="Lists"
                spy={true}
                smooth={true}
                className="space-y-4 cursor-pointer bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                {" "}
                Shop now
              </Link>
             
            </div>
          </div>
        </div> 
        {/* hgafhfhhjdf */}
        <div className="h-[500px] sm:h-64 md:h-64 relative space-y-4 ">
          <Image
            className=" object-fit  h-[500px] sm:h-64 md:h-64 bg-black opacity-50 -z-50"
            src={Shoe}
            alt="banner"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center h-full w-full">
            <h1
              className="text-6xl font-bold text-white text-center xl:text-8xl 
             lg:text-7xl sm:text-3xl  md:text-3xl   w-full "
            >
             Your feet will never feel the same again
            </h1>
            <div className="space-y-6 mt-8 animate-bounce">
              <Link
                activeClass="active"
                to="Lists"
                spy={true}
                smooth={true}
                className="space-y-4 cursor-pointer bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                {" "}
                Shop now
              </Link>
             
            </div>
          </div>
        </div>

        {/* //second  */}
        <div className="h-[500px] sm:h-64 md:h-64 relative space-y-4 ">
          <Image
            className=" object-fit  h-[500px] sm:h-64 md:h-64 bg-black opacity-50 -z-50"
            src={Watch}
            alt="banner"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center h-full w-full">
            <h1
              className="text-6xl font-bold text-white text-center xl:text-8xl 
             lg:text-7xl sm:text-3xl  md:text-3xl  w-full "
            >
              Make your time perfect with the perfect watch
            </h1>
            <div className="space-y-6 mt-8 animate-bounce">
            <Link
                activeClass="active"
                to="Lists"
                spy={true}
                smooth={true}
                className="space-y-4 cursor-pointer bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                {" "}
                Shop now
              </Link>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="h-[500px] sm:h-64 md:h-64 relative space-y-4 ">
          <Image
            className=" object-fit  h-[500px] sm:h-64 md:h-64 bg-black opacity-50 -z-50"
            src={Disk}
            alt="banner"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center h-full w-full">
            <h1
              className="text-6xl font-bold text-white text-center xl:text-8xl 
             lg:text-7xl sm:text-3xl md:text-3xl  w-full "
            >
              Everything at an affordable price
            </h1>
            <div className="space-y-6 mt-8 animate-bounce">
            <Link
                activeClass="active"
                to="Lists"
                spy={true}
                smooth={true}
                className="space-y-4 cursor-pointer bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                {" "}
                Shop now
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
