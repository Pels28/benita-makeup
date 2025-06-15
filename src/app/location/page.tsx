import { Divider } from "@heroui/react";

const Location = () => {
  return (
    <div className="max-w-5xl py-16  flex flex-col items-center mx-auto justify-center gap-5">
      <Divider className="w-12 text-black rounded-sm bg-black h-1 " />

      <div className="text-7xl font-alexBrush">Directions</div>

      <div className="space-y-2">
        <div className="font-cormorant">
          500 Terry France street, San Francisco, CA9418
        </div>
        <div className="font-playfairDisplay flex">
          <address>info@email.com</address>&nbsp;/ Tel:
          <span>0549572211</span>
        </div>
      </div>
      <div className="space-y-2 text-center">
        <div className="font-cormorant text-4xl">Opening Hours</div>
        <div className="font-cormorant text-lg">
          Mon - Fri: 7am - 10pm \ Saturday:8am - 10pm \ 8am - 11pm
        </div>
      </div>

      <iframe
        className="w-full h-[500px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9597758880654!2d-0.15109659999999998!3d5.6498601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf83004af93d7b%3A0x9d8b0359baf3304a!2sKOAN%20PETROLEUM%20LTD!5e0!3m2!1sen!2sgh!4v1713970600045!5m2!1sen!2sgh"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Location;
