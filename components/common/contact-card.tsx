import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

interface IProps {
  title: string;
  icon: JSX.Element;
  description: string;
  number?: string;
}

const ContactCard = ({ title, icon, description, number }: IProps) => {
  return (
    <div className="min-w-52 p-6 bg-white border w-full flex flex-col justify-center gap-y-5 border-gray-200 shadow-2xl">
      <div className="mx-auto">{icon}</div>

      <div className="text-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-700">{description}</p>
        {number ? (
          <a
            href={`tel:${number}`}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center"
          >
            {number}
          </a>
        ) : (
          <a
            href="#"
            className="inline-flex text-base items-center px-5 py-3 font-medium text-center text-white bg-blue-500 rounded hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Contact Support
          </a>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
