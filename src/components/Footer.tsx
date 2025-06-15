import React from "react";
import Button from "./Button";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      {" "}
      {/* Removed h-[150px] */}
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-row items-center justify-center gap-4">
          <Button size="md" radius="full" isIconOnly>
            <BsFacebook className="h-8 w-8" />
          </Button>
          <Button size="md" radius="full" isIconOnly>
            <FaXTwitter className="h-6 w-6" />
          </Button>
          <Button size="md" radius="full" isIconOnly>
            <FaInstagram className="h-6 w-6" />
          </Button>
        </div>
        <p className="text-sm mt-5 md:text-base">
          © 2025 by Benita Makeup. Powered and secured by Pels
        </p>
      </div>
    </footer>
  );
};

export default Footer;
