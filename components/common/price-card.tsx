import React from "react";
import { MdCheck } from "react-icons/md";

interface IProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  custom?: boolean;
}

const PriceCard = ({ title, description, price, features, custom }: IProps) => {
  return (
    <div className="md:min-w-96 max-w-sm p-6 bg-white border border-gray-200 flex flex-col gap-y-4 justify-between rounded-lg shadow-lg">
      <div>
        <a href="#">
          <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 ">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-center text-gray-700">
          {description}
        </p>
        <h4 className="text-4xl text-center">{price}</h4>

        <div className="my-8">
          {features.map((feature, index) => {
            return (
              <div key={index} className="flex gap-x-2">
                <MdCheck size={20} className="text-blue-500" />
                <p className="mb-1 font-normal text-sm text-gray-700">
                  {feature}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <a
        href="#"
        className="inline-flex my-10 items-center px-5 mx-auto py-5 max-w-max text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
      >
        {custom ? "Schedule a demo" : "Buy now"}
      </a>
    </div>
  );
};

export default PriceCard;
