"use client"
import Image from "next/image";
import HeroImg from "@public/images/lashes-black.jpg";
import FacialsImg from "@public/images/facials.jpg";
import MakeupImg from "@public/images/brown-girl.jpg";
import HairStyleImg from "@public/images/hairstyle.jpg";
import NailsImg from "@public/images/nails.jpg";
import { Divider } from "@heroui/react";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxHomeSection = () => {
    const sectionRef = useRef(null)
    const {scrollYProgress} = useScroll({target: sectionRef, offset: ["start end", "end start"]})
    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"])

  return (
    <>
    <section ref={sectionRef} className="relative overflow-hidden min-h-[70vh] md:min-h-screen flex items-center md:items-start">
      <motion.div className="absolute w-full h-[130%]" style={{top: y}}>
        {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}
        <Image
          src={HeroImg}
          alt="home-img"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      <div
          className="flex flex-col items-center md:items-start text-center md:text-left w-full px-4 mt-0 md:mt-44 md:ml-44"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <p className="font-alexBrush text-[80px] md:text-[150px] m-0 p-0 text-white drop-shadow-lg">
            Welcome
          </p>
          <p className="font-playfairDisplay text-2xl md:text-3xl -mt-4 md:-mt-12 text-white drop-shadow-md">
            To a Full Beauty and Co-Experience
          </p>
        </div>
    </section>
    <div
        className="mx-4 md:mx-10 mb-20 -mt-20"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* FACIALS */}
          <div className="flex flex-col items-center h-[300px] justify-center gap-5 bg-red-300">
            <Divider className="w-12 text-black rounded-sm bg-black h-1" />
            <p className="font-cormorant text-2xl">FACIALS</p>
            <FaChevronCircleRight className="w-8 h-8 text-black" />
          </div>
          <div className="h-[300px] relative">
            <Image
              alt="facials-image"
              className="object-cover"
              src={FacialsImg}
              fill
            />
          </div>

          {/* MAKE UP */}
          <div className="flex flex-col items-center h-[300px] justify-center gap-5 bg-black">
            <Divider className="w-12 text-white rounded-sm bg-white h-1" />
            <p className="font-cormorant text-white text-2xl">MAKE UP</p>
            <FaChevronCircleRight className="w-8 h-8 text-white" />
          </div>
          <div className="h-[300px] relative">
            <Image
              alt="makeup-image"
              className="object-cover"
              src={MakeupImg}
              fill
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 mt-1">
          {/* HAIR STYLING */}
          <div className="h-[300px] relative">
            <Image
              alt="hairstyle-image"
              className="object-cover"
              src={HairStyleImg}
              fill
            />
          </div>
          <div className="flex flex-col items-center h-[300px] justify-center gap-5 bg-white">
            <Divider className="w-12 text-black rounded-sm bg-black h-1" />
            <p className="font-cormorant text-black text-2xl">HAIR STYLING</p>
            <FaChevronCircleLeft className="w-8 h-8 text-black" />
          </div>

          {/* NAILS */}
          <div className="h-[300px] relative">
            <Image
              alt="nails-image"
              className="object-cover"
              src={NailsImg}
              fill
            />
          </div>
          <div className="flex flex-col items-center h-[300px] justify-center gap-5 bg-red-300">
            <Divider className="w-12 text-black rounded-sm bg-black h-1" />
            <p className="font-cormorant text-black text-2xl">NAILS</p>
            <FaChevronCircleLeft className="w-8 h-8 text-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallaxHomeSection;
