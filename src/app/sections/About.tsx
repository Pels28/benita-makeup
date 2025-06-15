import { FaEye, FaHandSparkles } from "react-icons/fa6"
import Image from "next/image"
import AboutImg from "@public/images/benedicta.jpg";
const About = () => {
    return           <section
    id="about"
    className="relative py-12 md:py-20 px-4 bg-gradient-to-b from-white to-rose-50"
  >
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <div
          className="w-full md:w-2/5 relative mb-10 md:mb-0"
          data-aos="fade-right"
          data-aos-delay="150"
        >
          {/* Circle container - maintains aspect ratio */}
          <div
            className="relative mx-auto overflow-hidden rounded-full border-8 border-rose-100 shadow-xl"
            style={{ width: "min(70vw, 320px)", aspectRatio: "1/1" }}
          >
            <Image
              src={AboutImg}
              alt="Benedicta Agyei - Professional Makeup Artist"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Experience badge */}
          <div className="absolute bottom-0 right-0 transform translate-y-1/4 md:translate-y-1/4 z-10 bg-rose-800 text-white py-2 px-4 md:py-3 md:px-6 rounded-full shadow-lg">
            <p className="font-playfairDisplay text-lg md:text-xl">
              10+ Years Experience
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div
          className="w-full md:w-3/5"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h2 className="font-alexBrush text-5xl md:text-6xl text-rose-800 mb-6 text-center md:text-left">
            About Me
          </h2>

          <div className="space-y-4 md:space-y-6">
            <p className="font-playfairDisplay text-lg md:text-xl text-gray-700 leading-relaxed">
              Hi, I&apos;m&nbsp;
              <span className="text-rose-700 font-semibold">
                Benedicta Agyei
              </span>
              , a professional makeup artist with 10 years of experience
              transforming faces and boosting confidence through the
              power of makeup.
            </p>

            <p className="font-playfairDisplay text-lg md:text-xl text-gray-700 leading-relaxed">
              My journey started with a love for art and
              self-expression, and evolved into a career helping others
              shine. I believe in enhancing your natural features, not
              covering them up.
            </p>

            <p className="font-playfairDisplay text-lg md:text-xl text-gray-700 leading-relaxed">
              Whether you&apos;re walking down the aisle or walking the
              runway, I&apos;ll work with you to create a flawless,
              lasting look that reflects your personality and style.
            </p>

            <div className="mt-6 md:mt-8">
              <p className="font-alexBrush text-3xl md:text-4xl text-rose-800 text-center md:text-left">
                Let&apos;s create something beautiful together.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div
        className="absolute top-10 left-4 md:top-20 md:left-10 opacity-20"
        data-aos="fade"
        data-aos-delay="400"
      >
        <FaHandSparkles className="h-16 w-16 md:h-24 md:w-24 text-rose-300" />
      </div>
      <div
        className="absolute bottom-4 right-4 md:bottom-10 md:right-10 opacity-20"
        data-aos="fade"
        data-aos-delay="450"
      >
        <FaEye className="h-16 w-16 md:h-24 md:w-24 text-rose-300" />
      </div>
    </div>
  </section>
}

export default About