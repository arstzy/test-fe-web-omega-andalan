import PriceCard from "../common/price-card";

const Pricings = [
  {
    title: "Starter Plan",
    description: "Small businesses or startups",
    features: [
      "Basic modules (Accounting, Inventory Management)",
      "Up to 10 users",
      "Email support",
      "5 GB storage",
    ],
    price: "$30/mo",
    custom: false,
  },
  {
    title: "Professional Plan",
    description: "Medium-sized businesses",
    features: [
      "All Starter Plan features",
      "Additional modules (HR, CRM)",
      "Up to 50 users",
      "Priority email support",
      "50 GB storage",
    ],
    price: "$50/mo",
    custom: false,
  },
  {
    title: "Enterprise Plan",
    description: "Large enterprises",
    features: [
      "All Professional Plan features",
      "Advanced modules (Manufacturing, Project Management)",
      "Unlimited users",
      "Dedicated account manager",
      "24/7 phone support",
      "200 GB storage",
    ],
    price: "Let's talk",
    custom: true,
  },
];

const Pricing = () => {
  return (
    <div id="pricing" className="md:pt-36 pt-24 pb-52 px-6 text-start w-full">
        <h2 className="mb-10 font-bold text-center text-black md:text-5xl min-w-max text-3xl">
          Pricing
        </h2>

        <div className="flex flex-col md:flex-row md:gap-x-10 gap-y-4 md:gap-y-0 justify-center">
          {Pricings.map((pricing, index) => {
            return <PriceCard key={index} {...pricing} />;
          })}
        </div>
    </div>
  );
};
export default Pricing;
