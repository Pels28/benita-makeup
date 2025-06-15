import ParallaxImage from "@/components/ParallaxImage"
import { Divider } from "@heroui/react"
import { FaGlassCheers } from "react-icons/fa"
import { FaCamera, FaGem, FaLeaf, FaRing } from "react-icons/fa6"

const Services = () => {
    return <section
    id="services"
    className="relative h-[600px] w-full overflow-hidden"
  >
    {/* Background Image */}
    <div className="img">
      <ParallaxImage
        alt="Services background"
        src="/images/home-black.jpg"
      />
    </div>

    {/* Content Container - with proper constraints */}
    <div className="relative z-10 h-full flex items-center justify-center p-4">
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