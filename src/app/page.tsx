// app/page.js
"use client";

// import { ReactLenis } from "@studio-freight/react-lenis";

import { BsFacebook } from "react-icons/bs";
import { TbPoint, TbPointFilled } from "react-icons/tb";

import Button from "@/components/Button";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeSection from "./sections/HomeSection";
import About from "./sections/About";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad",
    });

    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const section = document.getElementById(hash);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("home");

  // Track active section for mobile navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      label: "Home",
      id: "home",
      icon: <TbPoint className="h-4 w-4 md:h-6 md:w-6 text-red-300" />,
      filledIcon: (
        <TbPointFilled className="h-4 w-4 md:h-6 md:w-6 text-red-300" />
      ),
    },
    {
      label: "About Us",
      id: "about",
      icon: <TbPoint className="h-4 w-4 md:h-6 md:w-6 text-red-300" />,
      filledIcon: (
        <TbPointFilled className="h-4 w-4 md:h-6 md:w-6 text-red-300" />
      ),
    },
    {
      label: "Services",
      id: "services",
      icon: <TbPoint className="h-4 w-4 md:h-6 md:w-6 text-red-300" />,
      filledIcon: (
        <TbPointFilled className="h-4 w-4 md:h-6 md:w-6 text-red-300" />
      ),
    },
    {
      label: "Testimonials",
      id: "testimonials",
      icon: <TbPoint className="h-4 w-4 md:h-6 md:w-6 text-red-300" />,
      filledIcon: (
        <TbPointFilled className="h-4 w-4 md:h-6 md:w-6 text-red-300" />
      ),
    },
    {
      label: "Contact Us",
      id: "contact",
      icon: <TbPoint className="h-4 w-4 md:h-6 md:w-6 text-red-300" />,
      filledIcon: (
        <TbPointFilled className="h-4 w-4 md:h-6 md:w-6 text-red-300" />
      ),
    },
  ];

  const scrollToSection = (id: string) => {
    window.history.pushState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* <ReactLenis root> */}
        {/* Left Social Media Bar (Desktop) */}

        <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
          <Button size="sm" className="bg-transparent" radius="full" isIconOnly>
            <BsFacebook className="h-6 w-6 text-red-300" />
          </Button>
          <Button size="sm" className="bg-transparent" radius="full" isIconOnly>
            <FaXTwitter className="h-6 w-6 text-red-300" />
          </Button>
          <Button
            className="bg-transparent text-red-300"
            size="sm"
            radius="full"
            isIconOnly
          >
            <FaInstagram className="h-6 w-6" />
          </Button>
        </div>

        {/* Right Navigation Points (Desktop) */}
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative group flex justify-end"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <span className="absolute right-full top-1/2 transform -translate-y-1/2 mr-3 bg-black/80 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
                  {item.label}
                </span>
              )}
              <Button
                size="sm"
                className="bg-transparent"
                radius="full"
                isIconOnly
                onPress={() => scrollToSection(item.id)}
              >
                {hoveredIndex === index || activeSection === item.id
                  ? item.filledIcon
                  : item.icon}
              </Button>
            </div>
          ))}
        </div>

        {/* Mobile Navigation Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-black/90 md:hidden flex justify-between px-4 py-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`flex flex-col items-center justify-center px-2 py-1 rounded-lg ${
                activeSection === item.id ? "text-rose-300" : "text-white"
              }`}
              onClick={() => scrollToSection(item.id)}
            >
              {activeSection === item.id ? item.filledIcon : item.icon}
              <span className="text-xs mt-1">{item.label}</span>
            </button>
          ))}
        </div>

        <div className="app pb-16 md:pb-0">
          {/* Hero Section */}
          <HomeSection />

          {/* About Section */}
          <About />
          {/* Special Offers Section */}
          <Services />
          {/* Testimonials Section */}
          <Testimonials />

          {/* Contact Section */}
          <Contact />
        </div>
      {/* </ReactLenis> */}
    </>
  );
};

export default Home;
