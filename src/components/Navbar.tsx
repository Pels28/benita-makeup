"use client";
import {
  Navbar as NextBar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Divider,
} from "@heroui/react";

export default function Navbar() {
  const handleNavClick = (sectionId: string) => {
    // Update the URL hash without causing a page jump
    if (window.history.pushState) {
      window.history.pushState(null, "", `#${sectionId}`);
    } else {
      window.location.hash = `#${sectionId}`;
    }

    // Scroll to the section
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <NextBar
      isBlurred
      isBordered
      position="static"
      className="font-monsterrat bg-transparent shadow-lg bg-primary h-24"
    >
      <NavbarBrand>
        <Link className="text-black" href="/">
          <div>
            <p className="font-bold text-5xl font-alexBrush">Benita MakeUp</p>
            <Divider className="w-12 text-white flex ml-[70%] rounded-sm bg-black h-1 " />
          </div>
        </Link>
      </NavbarBrand>

      <NavbarContent
        className="hidden font-cormorant text-2xl font-light ml-10  sm:flex gap-10"
        justify="center"
      >
        <NavbarItem>
          <Link
            onClick={() => handleNavClick("about")}
            className="text-black text-2xl hover:text-red-300 cursor-pointer"
          >
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem className="text-black">
          <Link
            onClick={() => handleNavClick("services")}
            className="text-black text-2xl hover:text-red-300 cursor-pointer"
          >
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleNavClick("testimonials")}
            className="text-black text-2xl hover:text-red-300 cursor-pointer"
          >
            Testimonials
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => handleNavClick("contact")}
            className="text-black text-2xl hover:text-red-300 cursor-pointer"
          >
            Contact Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>
    </NextBar>
  );
}
