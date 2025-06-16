"use client"
import { Divider } from "@heroui/react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { FaGlassCheers } from "react-icons/fa"
import { FaCamera, FaGem, FaLeaf, FaRing } from "react-icons/fa6"
import ServicesImg from "@public/images/home-black.jpg"
import Image from "next/image"

const Services = () => {
  const sectionRef = useRef(null)
  const {scrollYProgress} = useScroll({target: sectionRef, offset: ["start end", "end start"]})
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "10%"])
    return <section
    ref={sectionRef}
    id="services"
    className="relative h-[650px] w-full overflow-hidden"
  >

        <motion.div className="absolute w-full h-[130%]" style={{top: y}}>
        {/* <div className="absolute inset-0 bg-black/30 z-10" /> */}
        <Image
          src={ServicesImg}
          alt="services-img"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

    {/* Content Container - with proper constraints */}
    <div className=" h-full flex items-center justify-center p-4">
      <div
        className="h-[95%]  my-16 w-[95%] md:max-w-[55%] flex flex-col items-center justify-center gap-5 bg-black text-white py-10 px-6 overflow-auto"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <Divider className="w-12 text-white rounded-sm bg-white h-1" />
        <div className="font-alexBrush text-4xl md:text-6xl">
          Special Offers
        </div>

        <div className="w-full md:w-[80%] space-y-4">
          {[
            {
              icon: <FaRing className="mr-4 text-rose-300" />,
              text: "Bridal & Wedding Makeup",
            },
            {
              icon: <FaGlassCheers className="mr-4 text-rose-300" />,
              text: "Special Occasion & Event Makeup",
            },
            {
              icon: <FaCamera className="mr-4 text-rose-300" />,
              text: "Editorial & Photoshoot Looks",
            },
            {
              icon: <FaLeaf className="mr-4 text-rose-300" />,
              text: "Natural & Everyday Enhancements",
            },
            {
              icon: <FaGem className="mr-4 text-rose-300" />,
              text: "Glam & High-Fashion Styles",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center font-cormorant text-xl md:text-2xl"
              data-aos="fade-up"
              data-aos-delay={150 + index * 50}
            >
              <div className="flex items-center">
                {item.icon}
                {item.text}
              </div>
              {/* <div>ghc50</div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
}

export default Services