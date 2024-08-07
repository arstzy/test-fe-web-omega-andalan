import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { SiDatabricks } from "react-icons/si";

const About = () => {
  return (
    <div id="about" className="md:py-52 py-36 px-6 text-start w-full">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-1/2">
          <h2 className="font-semibold text-black md:text-5xl min-w-max text-3xl">
            About Us
          </h2>
          <p className="md:text-lg text-base max-w-4xl md:py-10 py-5">
            We are a leading provider of innovative ERP solutions designed to
            empower businesses of all sizes. Our mission is to simplify complex
            business processes, enhance productivity, and drive growth through
            cutting-edge technology and data-driven insights.
          </p>
          <div className="flex flex-col gap-y-10 md:px-10">
            <div className="flex gap-x-4 items-center">
              <MdDashboard className="text-sky-400" size={50} />
              <p className="max-w-lg text-sm md:text-base">
                Intuitive dashboards for real-time business insights and
                efficient decision-making across all tiers of our ERP system.
              </p>
            </div>
            <div className="flex gap-x-4 items-center">
              <SiDatabricks className="text-blue-400" size={50} />
              <p className="max-w-lg text-sm md:text-base">
                Robust data management capabilities, ensuring seamless
                integration and analysis of your business information.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image
            src={"/images/about.png"}
            alt="about-image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
