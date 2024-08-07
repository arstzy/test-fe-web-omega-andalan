/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ContactCard from "../common/contact-card";
import { LuMessageSquare } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="md:pt-48 pt-24 md:pb-52 pb-10 px-6 text-start w-full">
      <h2 className="md:mb-5 mb-2 font-bold text-black md:text-5xl min-w-max text-3xl">
        Get in touch
      </h2>
      <p className="text-lg">
        Want to get in touch? We'd love to hear from you. Here's how you can
        reach us.
      </p>

      <div className="md:my-16 my-4 flex flex-col md:flex-row justify-between md:gap-x-5 gap-y-4 md:gap-y-0">
        <ContactCard
          title="Talk to sales"
          icon={<BsTelephone size={50} />}
          description="Interested in our software? Just pick up the phone to chat with a
          member of our sales team."
          number="123-456-7890"
        />
        <ContactCard
          title="Contact Customer Support"
          icon={<LuMessageSquare size={50} />}
          description="Sometimes you need a little help from your friends. Or a our support rep. Don’t worry… we’re here for you."
        />
      </div>
    </div>
  );
};

export default Contact;
